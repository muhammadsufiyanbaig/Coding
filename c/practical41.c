#include <stdio.h>

int main() {
    int rows, i = 1, j;
    printf("Enter the number of rows for the * triangle: ");
    scanf("%d", &rows);
    do {
        j = 1;
        do {
            printf("* ");
            j++;
        } while (j <= i);
        printf("\n");
        i++;
    } while (i <= rows);
    return 0;
}
