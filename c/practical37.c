#include <stdio.h>

int main() {
    int n, factorial = 1, i = 1;
    printf("Enter a number: ");
    scanf("%d", &n);
    while (i <= n) {
        factorial *= i;
        i++;
    }
    printf("Factorial of %d: %d\n", n, factorial);
    return 0;
}
