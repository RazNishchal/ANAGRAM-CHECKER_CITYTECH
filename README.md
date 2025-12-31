# Anagram Checker

A high-performance web application designed to determine if two strings are anagrams. This project combines an optimized data structure approach with a modern, responsive user interface.

**Live Demo:** https://anagram-checker-citytech.vercel.app/

## 🛠 Features
- **Modern UI:** Professional Dark Mode with a Slate/Electric Blue theme.
- **Optimized UX:** - Disabled `autofill` for a cleaner input experience.
  - Small, compact result typography for better visual balance.
  - Custom favicon (`anagram.jpg`) integration.
  - 4-second auto-reset timer for seamless re-testing.

## 🧠 Algorithmic Logic: Frequency Counter Pattern
The core of this application uses the **Frequency Counter Pattern** to achieve high efficiency. Instead of nested loops ($O(n^2)$) or sorting ($O(n \log n)$), this logic runs in **Linear Time**.

### Step-by-Step Implementation:
1. **Normalization:** Both strings are converted to `lowercase()` and `trim()` is applied to remove accidental spaces.
2. **Length Guard:** If the lengths of the two strings are not equal, they cannot be anagrams. The function returns `false` immediately (O(1) exit).
3. **The Map (Frequency Counter):** A single JavaScript object (`counts`) is used to store the frequency of each character in the first string.
4. **Verification Loop:** As we iterate through the second string:
   - If the character does not exist in the map, it's not an anagram.
   - If it does exist, we decrement its count. 
5. **Success:** If the loop finishes without returning `false`, the strings are confirmed anagrams.

### Complexity Analysis:
- **Time Complexity:** $O(n)$ — We only iterate through each string once.
- **Space Complexity:** $O(k)$ — Where $k$ is the number of unique characters in the input (constant space if limited to the alphabet).



## 📂 Project Structure
```text
├── index.html   # HTML5 structure with favicon link
├── style.css    # Responsive CSS with Glassmorphism effects
├── script.js    # Optimized JS logic and UI event handling
└── anagram.jpg  # Asset used for browser favicon
