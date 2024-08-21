#include <stdio.h>

int main() {
    int num;
    printf("Enter the number to print its table: ");
    scanf("%d", &num);
    printf("Table of %d:\n", num);
    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", num, i, num * i);
    }
    return 0;
}
