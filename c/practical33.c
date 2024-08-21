#include <stdio.h>

int main() {
    char ch = 'a';

    printf("Print 'a' to 'z':\n");
    while (ch <= 'z') {
        printf("%c\t", ch);
        ch++;
    }
    return 0;
}
