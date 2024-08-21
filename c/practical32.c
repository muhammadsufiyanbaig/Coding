#include <stdio.h>

int main() {
    int rows, i, j;
    printf("Enter the number of rows for the reverse * triangle: ");
    scanf("%d", &rows);
    
    i = rows;
    while (i >= 1) {
        j = 1;
        while (j <= i) {
            printf("* ");
            j++;
        }
        printf("\n");
        i--;
    }
    return 0;
}
