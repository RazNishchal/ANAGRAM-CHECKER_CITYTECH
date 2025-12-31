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

    if (!s || !t) {
        resultDiv.innerText = "Please enter both words";
        resultDiv.style.color = "#fbbf24";
        return;
    }

    if (isAnagram(s, t)) {
        resultDiv.innerText = "They are anagrams";
        resultDiv.className = "result-text is-anagram";
    } else {
        resultDiv.innerText = "They are not anagrams";
        resultDiv.className = "result-text not-anagram";
    }

    btn.disabled = true;

    setTimeout(() => {
        input1.value = "";
        input2.value = "";
        resultDiv.innerText = "";
        resultDiv.className = "result-text";
        btn.disabled = false;
        input1.focus();
    }, 4000);
}

/* LOGIC BREAKDOWN:
1. Normalization: Uses .toLowerCase() and .trim() to ensure case and space-insensitive matching.
2. Length Guard: O(1) exit if lengths differ.
3. Frequency Map: O(n) pass to count characters in the first string using a hash map.
4. Comparison: Decrements counts while passing through the second string.
5. UI Interaction: Updates the DOM and switches CSS classes for visual feedback.
6. Auto-Reset: setTimeout clears input values and text after 4000ms.
7. Complexity: O(n) time, O(1) space (limited character set).
*/