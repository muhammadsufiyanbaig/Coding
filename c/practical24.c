#include <stdio.h>

int main() {
    int start, end;
    printf("Enter starting number:\t");
    scanf("%d",&start);
    printf("Enter ending number:\t");
    scanf("%d",&end);
    printf("Counting:\n");
    for (int i = start; i <= end; i++) {
        printf("\n%d ", i);
    }
    return 0;
}
