# Venue Pair Finder - Coding Challenge

## 📌 Overview
This is a simple TypeScript solution to find two different venues whose shares add up to a specific target number. The goal was to create a solution that is easy to read, fast, and works well even with a lot of data.

## 🚀 How I Solved It

### The Approach
Instead of checking every possible pair with two loops (which would be very slow for millions of records), I used a **Map**. 
* As the code reads each number, it calculates what other number is needed to reach the target.
* It checks if that "partner" number was already seen.
* This makes the search almost instant, regardless of the list size.

### Project Structure
I separated the code into two files to keep things clean:
* `findVenuePair.ts`: Contains the main function logic.
* `findVenuePair.test.ts`: Contains all the tests to make sure everything works correctly.

## 🧪 Testing
I included several tests to cover different situations:
* **The basic example:** Checking if `[120, 80, 40, 60]` with target `100` returns the right indices.
* **No result:** Making sure it returns `null` if no pair is found.
* **Duplicates:** Checking that it can handle cases like `[50, 50]` correctly.
* **Performance:** I added a test with **1,000,000 items** to make sure the code doesn't slow down or crash with large inputs.

## ⚙️ How to Run

### Run the Logic
If you want to run the script:
```bash
npx tsx findVenuePair.ts
// ts-node findVenuePair.ts