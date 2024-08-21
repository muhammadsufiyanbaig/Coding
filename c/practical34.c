#include <stdio.h>

int main() {
    int start, end;
    printf("Enter starting number:\t");
    scanf("%d",&start);
    printf("Enter ending number:\t");
    scanf("%d",&end);
    printf("Counting:\n");
    int i = start;
    while (i <= end) {
        printf("\n%d ", i);
        i++;
    }
    return 0;
}
