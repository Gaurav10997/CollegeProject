export  const questionData=[
    {
        questionId:1,
        questionNo:1,
        questionName:"Factorial",
        difficultyLevel:"easy",
        questionScore:"30",
        questionDescription:`The factorial of a number is the product of all the integers from 1 to that number. 
        For example, the factorial of 5 (denoted by 5!) is 1 x 2 x 3 x 4 x 5 = 120.`,
        example1:`Input: 5
Output: 120
Explanation: Because 5x4x3x2x1 == 120, we return 120.`,
        example2:`Input: nums = 4
Output: 24`,

        driverCode:`
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
        userCode:`class Solution{
            public int factorial(int n){
              
            }
        }`
    },
    
  ]