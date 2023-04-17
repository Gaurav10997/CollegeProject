export  const questionData=[
    {
        questionId:1,
        questionNo:1,
        questionName:"Two Sum",
        difficultyLevel:"easy",
        questionScore:"2",
        questionDescription:`Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
        You can return the answer in any order.`,
        example1:`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
        example2:`Input: nums = [3,2,4], target = 6
Output: [1,2]`,

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