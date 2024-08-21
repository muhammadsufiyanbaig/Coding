#include <stdio.h>

int main() {
 int num;
    printf("Enter the number to print its table: ");
    scanf("%d", &num);
    int i = 1;
    while (i <= 10) {
         printf("%d x %d = %d\n", num, i, num * i);
        i++;
    }
    return 0;
}
