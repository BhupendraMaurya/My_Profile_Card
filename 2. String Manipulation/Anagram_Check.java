import java.util.*;

public class Anagram_Check{

    // first approach
    public static boolean isAnagram(String str1, String str2){
        if(str1.length () != str2.length()){
            return false;
        }

        int hash[] = new int[26];

        for(int i=0;i<str1.length();i++){
            hash[str1.charAt(i) - 'a']++;
        }

        for(int i=0;i<str2.length();i++){
            hash[str2.charAt(i) - 'a']--;
        }

        for(int val : hash){
            if(val != 0){
                return false;
            }
        }

        return true;
    }

    // second approach
    public static boolean isAnagram2(String s, String t){
 
        if(s.length() != t.length()){
            return false;
        }

        char[] str1 = s.toCharArray();
        char[] str2 = t.toCharArray();

        Arrays.sort(str1);
        Arrays.sort(str2);

        return Arrays.equals(str1, str2);
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first string: ");
        String str1 = sc.next();
        System.out.println();

        System.out.print("Enter second string: ");
        String str2 = sc.next();

        System.out.println();

        // we can call any of the anagram function : isAnagram() or isAnagram2().
        if(isAnagram(str1, str2)){
            System.out.println("True, Valid Anagrams");
        }
        else{
            System.out.println("False, Invalid Anagrams");
        }
    }
}