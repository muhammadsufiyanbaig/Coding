#include <stdio.h>

int main()
{
    int start, end;
    printf("Starting number must be greater than ending number.\n");
    printf("Enter starting number:\t");
    scanf("%d", &start);
    printf("Enter ending number:\t");
    scanf("%d", &end);
    printf("Reverse counting:\n");
    do
    {
        printf("%d\n", start);
        start--;
    } while (start >= end);

    return 0;
}
