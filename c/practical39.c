#include <stdio.h>

int main() {
    printf("Counting from 1 to 10:\n");
    int i = 10;
    do {
        printf("\n%d ", i);
        i--;
    } while (i >= 1);
    return 0;
}
