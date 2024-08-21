#include <stdio.h>

int main() {
      int num;
     printf("Enter the number to print its table: ");
    scanf("%d", &num);
    printf("Table of %d:\n", num);
    int i = 1;
    do {
        printf("%d x %d = %d\n", num, i, num * i);
        i++;
    } while (i <= 10);
    return 0;
}
