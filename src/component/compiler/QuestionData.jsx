export const questionData = [
    {
        questionId: 1,
        questionNo: 1,
        questionName: "Factorial",
        difficultyLevel: "easy",
        questionScore: "30",
        questionDescription: `The factorial of a number is the product of all the integers from 1 to that number. 
        For example, the factorial of 5 (denoted by 5!) is 1 x 2 x 3 x 4 x 5 = 120.`,
        example1: `Input: 5
Output: 120
Explanation: Because 5x4x3x2x1 == 120, we return 120.`,
        example2: `Input: nums = 4
Output: 24`,

        driverCode: `
        import java.util.*;
        public class Main {
          private static boolean checkTestCase(){
              HashMap<Integer,Integer> map=new HashMap<>();
              map.put(0,1);
              map.put(1,1);
              map.put(5,120);
              map.put(8,40320);
              map.put(10,3628800);
              Solution obj=new Solution();
              for(Map.Entry<Integer,Integer> mapElement : map.entrySet()){
                  int key=mapElement.getKey();
                  int value= mapElement.getValue();
                  int ans=obj.factorial(key);
                  if(ans!=value){
                      return false;
                  }
              }
              return true;
          }
          
          public static void main(String[] args) {
              boolean isPass=checkTestCase();
              System.out.println(isPass);
            }
          }
        
        `,
        userCode: `class Solution{
            public int factorial(int n){
              
            }
        }`
    },
    {
        questionId: 2,
        questionNo: 2,
        questionName: "Prime Number",
        difficultyLevel: "easy",
        questionScore: "30",
        questionDescription: `Check prime number. A prime number is a number which is divisible by itself and 1. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number. For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself.  `,
        example1: `Input: 5
Output: true
Explanation: 5 is prime number since it is divisible of itself and 1 `,
        example2: `Input: nums = 4
Output: 24`,
        driverCode: `public class Main {
            public static void main(String[] args) {
                int[] input=new int[]{1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
                73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191,
                193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
                317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449,
                457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599,
                601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739,
                743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877,
                881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
                };
                Solution obj=new Solution();
                for(int i=0;i<input.length;i++){
                    boolean ans=obj.checkPrime(input[i]);
                    if(!ans) {
                        System.out.println(false);
                        break;
                    }
                }
                System.out.println(true);
                }
        }
       
        `,
        userCode: `class Solution{
            boolean checkPrime(int num){
        
                /*write your code 1-1000*/
            }
        }`
    }
]