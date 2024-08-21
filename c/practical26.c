#include <stdio.h>

int main() {
    int start, end;
    int sum = 0;
    printf("Enter starting number:\t");
    scanf("%d",&start);
    printf("Enter ending number:\t");
    scanf("%d",&end);
    printf("Total Sum:\t");
    for (int i = start; i <= end; i++) {
        sum += i;
    }
        printf("%d ", sum);
    return 0;
}
