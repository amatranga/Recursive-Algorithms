///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  _____                          _               ////////////////////
// |  __ \                        (_)              ////////////////////
// | |__) |___  ___ _   _ _ __ ___ _  ___  _ __    ////////////////////
// |  _  // _ \/ __| | | | '__/ __| |/ _ \| '_ \   ////////////////////
// | | \ \  __/ (__| |_| | |  \__ \ | (_) | | | |  ////////////////////
// |_|  \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|  ////////////////////
//                                                 ////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// NOTE: modify the parameter list of each function as needed       ///
///////////////////////////////////////////////////////////////////////

// Problem #1

// Write a recursive method called countVowels that returns the number of vowels in a given String
// countVowels('abcedfg') ->2

function isVowel(letter){
  var vowels = ['a','e','i','o','u','A','E','I','O','U'];
  return vowels.indexOf(letter) !== -1;
}

function countVowels(str) {
    if (str.length === 0)
        return 0;
    return (isVowel(str.charAt(0)) ? 1 : 0) + countVowels(str.slice(1));
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

var recursiveSum = function(n){
	var remainder = n % 10;
  var sum = remainder;
  if (n >= 10){
    var rest = Math.floor(n / 10);
    sum += recursiveSum(rest);
  }
  return sum;

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #3
// Check if a given number is a power of 2
// PowerOfTwo(8) -> true
// PowerOfTwo(9) -> false

var isPowerOfTwo = function(n){
  if (n / 2 === 1){
    return true;
  } else if (n % 2 === 1){
    return false;
  } else {
    return isPowerOfTwo(n / 2);
  }

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #4

// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)


//rate should be an integer...i.e. 10% will be input as 10
var invest = function(amount, rate, years){
  if (years === 0){
    return amount;
  }
  return invest(amount + amount * rate / 100, rate, years - 1);
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
var printRangeUpDown = function(min, max){
  if (min === max){
    console.log(min);
    return;
  }
  console.log(min);
  printRangeUpDown(min + 1, max);
  console.log(min);
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #6

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!
var binaryTree = function(value, right, left){
  this.value = value;
  this.right = right;
  this.left = left;
}

var binaryTreeSum = function(tree){
  var total = tree.value || 0;
  if (this.right){
    sum += binaryTreeSum(tree.right);
  }
  if (this.left){
    sum += binaryTreeSum(this.left);
  }
  return total;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #7

// Given an array of integers which is sorted in increasing order
// build a binary search tree of minimal height. Height of a tree
// is the max number of edges from a node to the tree's root node.
// e.g. this tree has height 3.
//                   10
//                  /  \
//                3     30
//               / \
//              1   7
//                   \
//                    8

// you'll need to create a binary search tree constructor!
var arrayToBinarySearchTree = function(array){

};