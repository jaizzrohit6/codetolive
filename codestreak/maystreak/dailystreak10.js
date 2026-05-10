/*
=========================Basic Array Duplicate Questions=========================

    Remove all duplicate elements from an array and return only unique elements. ✅ 
    Given an array of integers, return a new array with duplicates removed.
    Find all unique elements in an array.
    Count the number of distinct elements in an array.
    Check if an array contains any duplicate values.
    Print only the first occurrence of each element in an array.
    Remove duplicates from an array without using any built-in function.
    Remove duplicates from an array of strings.

=========================Medium Array Duplicate Questions=========================

    Remove duplicates from a sorted array in-place and return the new length.
    Remove duplicates from an unsorted array in-place.
    Remove duplicates from an array while preserving the original order.
    Remove duplicates such that each element appears at most twice.
    Remove duplicates such that each element appears at most K times.
    Find the first duplicate element in an array.
    Find the second occurrence index of the first duplicate.
    Find all elements that appear more than once in an array.
    Find all elements that appear exactly once in an array.
    Return the array with duplicates moved to the end, unique elements at front.
    Remove duplicates from an array of objects based on a specific key/property.
    Given two arrays, merge them and remove duplicates.
    Remove duplicates from a 2D array (matrix).
    Remove duplicates from a linked list (array representation).

=========================Advanced Array Duplicate Questions=========================

    Remove duplicates from a very large array (size > 10^6) efficiently.
    Remove duplicates from an array of objects with nested properties.
    Remove duplicates from an array of strings with special characters.
    Remove duplicates from an array of dates (YYYY-MM-DD format).
    Remove duplicates from an array of booleans.
    Remove duplicates from an array of mixed types (numbers, strings, booleans).
    Remove duplicates from an array of objects with multiple keys.
    Remove duplicates from an array of arrays.
    Remove duplicates from an array of functions.

=========================Expert Array Duplicate Questions=========================
    Remove duplicates from an array in O(n) time and O(1) space.
    Remove duplicates from an array using Bit Manipulation.
    Find the only non-duplicate element in an array where every other element appears twice (XOR trick).
    Find the only non-duplicate element where every other element appears three times.
    Find all elements that appear more than n/2 times (Majority Element).
    Find all elements that appear more than n/3 times.
    Given a sorted array, remove duplicates and return the count of unique elements without extra space.
    Remove duplicates from an array of arrays (nested array deduplication).
    Find the longest subarray with no duplicate elements.
    Find the smallest window in an array that contains all unique elements.

=========================Solution=========================
*/

let arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
let returnuniqueElements = (arr) =>{
    //time complexity: O(n^2)
    //space complexity: O(n)
    let uniqueElements = []
    for(let i = 0;i< arr.length;i++){
        if(!uniqueElements.includes(arr[i])){{
            uniqueElements.push(arr[i])
        }}
    }
    return uniqueElements
}
console.log(returnuniqueElements(arr))

