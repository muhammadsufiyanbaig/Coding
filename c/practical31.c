#include <stdio.h>

int main() {
    int rows, i = 1, j;
    printf("Enter the number of rows for the * triangle: ");
    scanf("%d", &rows);
    while (i <= rows) {
        j = 1;
        while (j <= i) {
            printf("* ");
            j++;
        }
        printf("\n");
        i++;
    }
    return 0;
}
