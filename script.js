function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const counts = {};
    for (let char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }
    for (let char of t) {
        if (!counts[char]) return false;
        counts[char]--;
    }
    return true;
}

function checkAnagram() {
    const input1 = document.getElementById('str1');
    const input2 = document.getElementById('str2');
    const resultDiv = document.getElementById('result');
    const btn = document.getElementById('checkBtn');

    const s = input1.value.toLowerCase().trim();
    const t = input2.value.toLowerCase().trim();

    // Internal helper to reset UI after 4 seconds
    const startResetTimer = () => {
        btn.disabled = true;
        setTimeout(() => {
            input1.value = "";
            input2.value = "";
            resultDiv.innerText = "";
            resultDiv.className = "result-text";
            resultDiv.style.color = ""; // Resets warning color if any
            btn.disabled = false;
            input1.focus();
        }, 4000);
    };

    // Validation: Check if inputs are empty
    if (!s || !t) {
        resultDiv.innerText = "Please enter both words";
        resultDiv.style.color = "#fbbf24";
        startResetTimer(); // Triggers the 4-second reset for the warning
        return;
    }

    // Main Anagram Logic
    if (isAnagram(s, t)) {
        resultDiv.innerText = "They are anagrams";
        resultDiv.className = "result-text is-anagram";
    } else {
        resultDiv.innerText = "They are not anagrams";
        resultDiv.className = "result-text not-anagram";
    }

    startResetTimer(); // Triggers the 4-second reset for results
}

/* LOGIC BREAKDOWN:
1. Normalization: Uses .toLowerCase() and .trim() for case/space-insensitive matching.
2. Length Guard: O(1) exit if lengths differ.
3. Frequency Map: O(n) pass to count characters in a hash map.
4. Validation Fix: Added startResetTimer() to the "empty field" case so warnings clear in 4s.
5. UI Interaction: Updates the DOM with small, compact text as requested.
6. Auto-Reset: Centralized setTimeout clears values and restores focus after 4000ms.
*/
