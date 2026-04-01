# Ironclad Ledger - Technical Specification

## 1. Technology Stack
- **Frontend**: Next.js (React), Tailwind CSS, TypeScript
- **Backend**: Node.js (Next.js API Routes or Express)
- **Database**: PostgreSQL
- **ORM**: Prisma / Drizzle ORM (Recommended)

---

## 2. Database Schema (PostgreSQL)

### `suppliers`
Tracks the list of available suppliers.
- `id` (UUID, Primary Key)
- `name` (VARCHAR, Unique, Not Null) - e.g., "Global Steel Dynamics"
- `contact_info` (TEXT, Nullable)
- `created_at` (TIMESTAMP, Default: NOW())
- `updated_at` (TIMESTAMP, Default: NOW())

### `materials`
Defines the types of steel rebar available in the system.
- `id` (UUID, Primary Key)
- `name` (VARCHAR, Unique, Not Null) - e.g., "#3", "熱軋鋼捲"
- `description` (TEXT, Nullable) - e.g., "3/8\" 直徑"
- `unit` (VARCHAR, Default: '公噸')
- `minimum_stock_threshold` (DECIMAL, Default: 0) - Used for low stock warnings
- `created_at` (TIMESTAMP, Default: NOW())
- `updated_at` (TIMESTAMP, Default: NOW())

### `inventory_batches`
Tracks specific batches of materials received to support FIFO (First-In-First-Out).
- `id` (UUID, Primary Key)
- `batch_number` (VARCHAR, Unique, Not Null) - e.g., "S-99218"
- `material_id` (UUID, Foreign Key to `materials`)
- `supplier_id` (UUID, Foreign Key to `suppliers`)
- `initial_quantity` (DECIMAL, Not Null) - Quantity originally received
- `remaining_quantity` (DECIMAL, Not Null) - Current available quantity
- `cost_per_unit` (DECIMAL, Not Null) - Cost per ton
- `status` (VARCHAR, Default: 'AVAILABLE') - 'AVAILABLE', 'DEPLETED'
- `received_date` (TIMESTAMP, Not Null)
- `created_at` (TIMESTAMP, Default: NOW())
- `updated_at` (TIMESTAMP, Default: NOW())

### `transactions`
Logs all inbound (restock) and outbound (shipping) actions.
- `id` (UUID, Primary Key)
- `transaction_type` (VARCHAR, Not Null) - 'INBOUND', 'OUTBOUND'
- `material_id` (UUID, Foreign Key to `materials`)
- `quantity` (DECIMAL, Not Null) - e.g., 12.5 (positive for both, type defines direction)
- `total_amount` (DECIMAL, Nullable) - Total cost or value of the transaction
- `transaction_date` (TIMESTAMP, Default: NOW())
- `reference_id` (UUID, Nullable) - Could link to specific orders or batches
- `created_at` (TIMESTAMP, Default: NOW())

### `transaction_batch_allocations`
Maps outbound transactions to specific inventory batches (to deduct FIFO properly).
- `id` (UUID, Primary Key)
- `transaction_id` (UUID, Foreign Key to `transactions`)
- `batch_id` (UUID, Foreign Key to `inventory_batches`)
- `quantity_deducted` (DECIMAL, Not Null)

---

## 3. REST API Specification

### 3.1 Dashboard & Inventory
- **`GET /api/inventory/summary`**
  - **Description**: Retrieves total inventory amount and overall status.
  - **Response**: `{ totalQuantity: 1248, status: "充足" }`

- **`GET /api/inventory/materials`**
  - **Description**: Retrieves real-time stock levels grouped by material/size.
  - **Response**: `[ { material: "#3", description: "3/8\" 直徑", quantity: 342, status: "正常" }, ... ]`

### 3.2 Inbound (Restock)
- **`GET /api/suppliers`**
  - **Description**: Get a list of suppliers for the restock form.
- **`POST /api/inventory/inbound`**
  - **Description**: Record a new shipment of materials.
  - **Payload**:
    ```json
    {
      "supplierId": "uuid",
      "materialId": "uuid",
      "quantity": 12,
      "costPerUnit": 24500
    }
    ```
  - **Action**: Creates an `inventory_batch` and an 'INBOUND' `transaction`.

### 3.3 Outbound (Shipment)
- **`GET /api/inventory/batches?materialId={id}`**
  - **Description**: Retrieves available batches for a specific material, sorted by `received_date` ASC (for FIFO).
  - **Response**: `[ { batchNumber: "S-99218", remainingQuantity: 42.5, receivedDate: "2023-10-12" }, ... ]`
- **`POST /api/inventory/outbound`**
  - **Description**: Process a shipment, deducting stock from selected batches.
  - **Payload**:
    ```json
    {
      "materialId": "uuid",
      "totalQuantity": 12.0,
      "allocations": [
        { "batchId": "uuid", "quantity": 12.0 }
      ]
    }
    ```
  - **Action**: Updates `remaining_quantity` in `inventory_batches`, creates an 'OUTBOUND' `transaction` and `transaction_batch_allocations`.

### 3.4 History & Analytics
- **`GET /api/transactions`**
  - **Description**: Retrieves recent inbound/outbound logs.
  - **Query Params**: `?type=INBOUND|OUTBOUND&limit=10`
  - **Response**: `[ { type: "INBOUND", materialName: "熱軋鋼捲", quantity: 12.5, date: "2024-02-24", batchNumber: "882" }, ... ]`
- **`GET /api/analytics/price-trends`**
  - **Description**: Retrieves average cost per ton over the last 6 months.
