#include <stdio.h>

int main() {
 int start, end;

    printf("Starting Number must be greater then ending number\n");
    printf("Enter starting number:\t");
    scanf("%d", &start);
    printf("Enter ending number:\t");
    scanf("%d", &end);
    start = end;
    printf("Reverse counting:\n");
    for (int i = end; i >= start; i--) {
        printf("\n%d ", i);
    }
    return 0;
}
