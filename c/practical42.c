#include <stdio.h>

int main() {
    int rows, i, j;
    printf("Enter the number of rows for the reverse * triangle: ");
    scanf("%d", &rows);
    
    i = rows;
    do {
        j = 1;
        do {
            printf("* ");
            j++;
        } while (j <= i);
        printf("\n");
        i--;
    } while (i >= 1);
    
    return 0;
}
