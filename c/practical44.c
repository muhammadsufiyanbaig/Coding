#include <stdio.h>

int main() {
    int start, end;
    printf("Enter starting number:\t");
    scanf("%d",&start);
    printf("Enter ending number:\t");
    scanf("%d",&end);
    printf("Counting:\n");
    int i = start;
    do {
        printf("\n%d ", i);
        i++;
    } while (i <= end);
    return 0;
}
