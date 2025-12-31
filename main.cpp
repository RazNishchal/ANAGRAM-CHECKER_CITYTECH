#include <iostream>
#include <string>
#include <vector>

class Anagram
{
public:
    bool isAnagram(std::string s, std::string t)
    {
        if (s.length() != t.length())
        {
            return false;
        }

        int counts[26] = {0};

        for (int i = 0; i < s.length(); i++)
        {
            counts[s[i] - 'a']++;
            counts[t[i] - 'a']--;
        }

        for (int i = 0; i < 26; i++)
        {
            if (counts[i] != 0)
            {
                return false;
            }
        }

        return true;
    }
};

int main()
{
    Anagram solver;
    std::string s, t;
    char choice;

    do
    {
        std::cout << "\n--- Anagram Checker ---" << std::endl;
        std::cout << "Enter first word: ";
        std::cin >> s;
        std::cout << "Enter second word: ";
        std::cin >> t;

        if (solver.isAnagram(s, t))
        {
            std::cout << "Result: True (They are anagrams!)" << std::endl;
        }
        else
        {
            std::cout << "Result: False (Not anagrams)" << std::endl;
        }

        std::cout << "\nDo you want to check another pair? (y/n): ";
        std::cin >> choice;

    } while (choice == 'y' || choice == 'Y');

    std::cout << "Exiting program..." << std::endl;
    return 0;
}

/* LOGIC BREAKDOWN:
 1. Length Validation: If strings have different lengths, they cannot be anagrams.
 2. Frequency Array: We use an array of 26 integers to represent the alphabet.
 3. Character Mapping: By subtracting 'a' from a character (e.g., 'b' - 'a'), we get its index (0-25).
 4. Counting: We loop through both strings once. String 's' increments the count, and string 't' decrements it.
 5. Final Check: If the strings are anagrams, every index in the array must be 0.
 6. Interactivity: A 'do-while' loop allows the user to repeat the process until they choose to exit.
 7. Complexity: Time is O(n) and Space is O(1) because the array size (26) is constant.
*/