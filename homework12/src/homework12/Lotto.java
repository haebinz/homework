package homework12;

import java.util.Arrays;

public class Lotto {

	public static int[] solution(int[] lottos, int[] win_nums) {
        int zeroCount = 0;    // 지워진 0의 개수
        int matchCount = 0;   // 일치하는 번호 개수

     
        for (int i = 0; i < lottos.length; i++) {
            if (lottos[i] == 0) {
                zeroCount++; // 0은 모르는 숫자
            } else {
                // 당첨 번호 배열과 비교
                for (int j = 0; j < win_nums.length; j++) {
                    if (lottos[i] == win_nums[j]) {
                        matchCount++;
                        break; // 중복이 업음
                    }
                }
            }
        }

        int maxMatch = matchCount + zeroCount;
        int minMatch = matchCount;

        return new int[]{getRank(maxMatch), getRank(minMatch)};
    }

    // 일치 개수에 따라 등수 계산
    private static int getRank(int match) {
        if (match >= 2) {
            return 7 - match;
        } else {
            return 6; // 1개 이하 맞으면 낙첨
        }
    }

    // 테스트용 main
    public static void main(String[] args) {
        int[] lottos1 = {44, 1, 0, 0, 31, 25};
        int[] winNums1 = {31, 10, 45, 1, 6, 19};
        System.out.println(Arrays.toString(solution(lottos1, winNums1))); // [3, 5]

        int[] lottos2 = {0, 0, 0, 0, 0, 0};
        int[] winNums2 = {38, 19, 20, 40, 15, 25};
        System.out.println(Arrays.toString(solution(lottos2, winNums2))); // [1, 6]

        int[] lottos3 = {45, 4, 35, 20, 3, 9};
        int[] winNums3 = {20, 9, 3, 45, 4, 35};
        System.out.println(Arrays.toString(solution(lottos3, winNums3))); // [1, 1]
    }
}