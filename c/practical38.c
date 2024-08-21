#include <stdio.h>

int main() {
    printf("Counting from 1 to 10:\n");
    int i = 1;
    do {
        printf("\n%d ", i);
        i++;
    } while (i <= 10);
    return 0;
}
