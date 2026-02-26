# Venue Pair Finder - Coding Challenge

## 📌 Overview
This is a TypeScript-based solution designed to find two distinct indices in a `venues` array whose values sum up to a specific `target`. The solution is optimized to handle large datasets (millones of records) efficiently.

## 🚀 The Approach
Instead of using a nested loop (which would be very slow for large inputs), I implemented a **Map-based search**:
* As we iterate through the array, we calculate the "partner" number (complement) needed to reach the target.
* We use a **Map** to store numbers we have already seen. This allows us to check if the partner exists in constant time.
* This ensures the application remains fast and responsive regardless of the input size.

## 📂 Project Structure
To keep the code organized and follow best practices, I separated the logic from the validation:
* `findVenuePair.ts`: Contains the core logic and the exported function.
* `findVenuePair.test.ts`: Contains the test suite and performance benchmarks.

## 🧪 Testing Suite
I used the **Node.js native test runner** to keep the project lightweight and avoid heavy external dependencies. The tests cover:
* **Core Requirements:** Validating the example provided in the challenge.
* **Edge Cases:** Handling scenarios with no results, duplicate values, and targets larger than the inputs.
* **Performance:** A stress test with **1,000,000 records** to ensure the code handles high loads without issues.

## ⚙️ How to Run

### 1. Install Dependencies
Install the necessary development types and the TypeScript runner:
```bash
npm install
```
### 2. Run the Logic File 
```bash
npx tsx findVenuePair.ts
```
### 3. Run the Tests (Recommended)
```bash
npx tsx --test findVenuePair.test.ts
```