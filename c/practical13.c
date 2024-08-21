//string length count
#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "apple";
    char str2[] = "banana";
   printf("0 represent false and 1 represent true\n");
    printf("%s > %s is %d\n", str1, str2, strcmp(str1, str2) > 0);
    printf("%s < %s is %d\n", str1, str2, strcmp(str1, str2) < 0);
    printf("%s == %s is %d\n", str1, str2, strcmp(str1, str2) == 0);
    printf("%s != %s is %d\n", str1, str2, strcmp(str1, str2) != 0);

    return 0;
}
