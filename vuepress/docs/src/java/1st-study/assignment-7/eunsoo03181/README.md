---
sidebar: auto
---
# 자바 스터디 - 7주차
# 1. 자료구조와 시간 복잡도

## 개요

자료구조(Data Structure)란, 개발자가 데이터를 효율적으로 사용할 수 있도록 정리하는 방법을 의미합니다. 자료구조로는 배열, 리스트, 트리, 그래프 등이 있으며, 상황에 따라 이들의 효율이 다를 수 있으므로, 자료구조의 장단점을 파악하고 상황에 맞는 최적의 자료구조를 사용할 수 있어야 합니다.
<br/>

---

## 추상 자료형

추상 자료형(ADT: Abstract Data Type)란, 자료들과 그 자료들에 대한 연산들을 명기한 것으로, 구현 방법을 직접 명시하지 않으므로 자료구조와 차이를 보입니다. 이는 자료형과 조작을 표현한 것이기 때문에, 데이터의 실제 표현과 구현이 정해지지 않은 것입니다. Java에서는 인터페이스(Interface) 또는 클래스(Class)로 구현됩니다.
<br/>

---

## 시간 복잡도

시간 복잡도란, 프로그램에서 입력값과 연산 수행간의 상관 관계를 나타내는 척도입니다. 그 중 Big-O 계산법은 코드에서 최악의 결과일 때를 상정하여 시간 복잡도를 계산합니다.

Big-O 표기는, 다음과 같은 모습을 하며, 가장 영향력이 큰 문자만 적습니다. 예를 들어, 시간 복잡도가 O(2n! + 5n)인 경우, O(n!)으로 표기합니다.
<br/>

**상수 시간 - O(1)**

프로그램을 실행할 때 오로지 한 작업만 실행합니다.


**로그 시간 - O(log n)**

프로그램을 실행할 때, 필요한 연산이 특정 원인에 따라 감소합니다. 이때, log n은 상용로그가 아닌 밑이 2인 log입니다.

**직선 시간 - O(n)**

프로그램을 실행할 때, 단계의 수와 입력값이 1:1입니다. 실생활에서 예를 든다면, 101동에 사는 친구집의 ‘호 수’를 찾기 위해서는 최악의 경우 N번동안 집을 찾아야 합니다. 이를 O(n)으로 나타낼 수 있습니다.

**선형로그 시간 - O(n log n)**

퀵 정렬과 같은 방식이 위와 같은 방식을 따릅니다.

**다차 시간 - O(n^c)**

프로그램을 실행할 때, 단계의 수와 입력값이 c제곱에 비례합니다. 실생활에서 예를 든다면, 1단지에 사는 친구의 집에 가기 위해서는 N번동안 친구가 사는 동을 찾아야 하고, N번동안 친구가 사는 호를 찾아야 합니다. 즉, N^2의 실행 횟수가 발생하므로, O(n^2)이 됩니다.

**지수 시간 - O(2^n)**

c^n은 2^log₂c^n이기 때문에, 주로 2^n으로 표기합니다. 재귀함수의 호출시 자주 가지게 되는 시간 복잡도입니다.

**계승 시간 - O(n!)**

매우 비효율적인 코드로, n팩토리얼을 구하는 함수를, 재귀 함수로 만들 경우 구현할 수 있습니다.

유의할 것은 시간 복잡도가 작은 것이 반드시 좋은 코딩이라고 보장할 수 없다는 점입니다. 시간 복잡도가 작을수록 프로그램의 실행이 빨라지고 정확해지지만 코드의 가독성과 유지 보수성이 훼손될 수 있어 실제로 코드를 설계할 때는 시간 복잡도 뿐만 아니라 가독성과 유지 보수성을 고려하는 것을 권장합니다.

```Java
package DataStructure.TimeComplexity;

public class GetTotal {

    static int cnt;

    public static int getSum1(int n) {
        int result = 0;
        cnt = 0;
        System.out.println("=== getSum1 함수 연산 시작 ===");
        for (int i=1; i<=n; i++) {
            cnt++;
            System.out.println(cnt + "번째 연산.");
            result += i;
        }
        System.out.println("=== getSum1 함수 연산 종료 ===\n");
        return result;
    }

    public static int getSum2(int n) {
        cnt = 0;
        cnt++;
        System.out.println("=== getSum2 함수 연산 시작 ===");
        System.out.println(cnt + "번째 연산.");
        System.out.println("=== getSum2 함수 연산 종료 ===\n");
        return n*(n+1)/2;
    }
}
```
```Java
package DataStructure.TimeComplexity;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();

        int result1 = GetTotal.getSum1(input);
        int result2 = GetTotal.getSum2(input);

        System.out.println("result1 : " + result1);
        System.out.println("result2 : " + result2);
    }
}
```

getTotal 클래스 안에는 두 개의 메소드가 있으며, 둘 다 주어진 변수 input에 대하여 1부터 input까지의 합을 시행하는 중 연산 횟수를 출력하고, 그 정답 반환합니다. 둘은 같은 값을 반환하지만, getSum1은 input번의 연산을, getSum2는 1번의 연산을 합니다. 즉, getSum1의 시간 복잡도는 O(n), getSum2의 시간 복잡도는 O(1)임을 알 수 있습니다.

둘 중 효율적인 코드는 getSum2이지만, 코드를 처음 본 사람이라면, getSum1의 가독성과 직관성이 더 높을 것입니다. 위의 코드는 단순하여, 큰 차이가 없을 수도 있지만, 가독성과 직관성은 유지 보수성에 이어지므로, 이들을 모두 고려하여 프로그램을 설계할 필요가 있습니다.
# 2. 순환

## 개요

순환(Recursion)이란, 알고리즘이나 함수(메소드)가 자신을 호출하여 문제를 해결하는 프로그래밍 기법입니다. 순환은 독특한 개념적인 프레임 워크를 제공하며, 자료구조를 다루는 프로그램에 적합합니다.

---

## 재귀 함수

재귀 함수(Recursion Function)은 자기 자신을 호출하는 함수입니다. 재귀 함수는 자신을 반복적으로 호출함으로써, 원하는 결과를 도출해낼 수 있습니다.

그러나, 재귀 함수는 여러번 호출하기에 시간 복잡도가 크다는 단점이 있습니다. 보통, 중복되는 계산을 줄이기 위해, 메모이제이션(memoization)을 이용합니다. 메모이제이션은, 한 번 계산한 결과를 메모리에 저장하였다가 꺼내써 중복 계산을 방지하는 방식입니다.

---

## 거듭제곱 계산

p의 n제곱을 구하는 방법은 p를 n번 곱하여 값을 반환하는 것입니다. Java에서는 pow() 메소드가 제공되지만, 순환을 이용하여 값을 구할 수 있습니다.

```Java
package DataStructure.Recursion;

public class GetPower {
    public static double getPower(double p, int n) {
        Main.cnt++;
        if (n==0) return 1;
        else return p*getPower(p, n-1);
    }
}
```

재귀를 이용할 경우 시간 복잡도는 O(n)입니다. 일반적으로 pow() 메소드의 시간 복잡도가 O(log n)인 것을 비교했을 때, 거듭제곱 계산은 pow() 메소드를 이용하는 것이 효율 측면에서는 좋습니다.

---

## 하노이 탑

하노이 탑은 3개의 기둥에 적당한 개수의 원반을 쌓아 놓고 다른 쪽으로 옮기는 게임입니다. 하노이 탑은 한 번에 하나의 원반만 옮길 수 있고, 큰 원반을 작은 원반 위에 놓을 수 없다는 규칙이 있습니다.

하노이 탑의 기본적인 원리는 n개의 원반 중, 크기가 가장 큰 원반을 제외한 n-1개의 원반을 목표 기둥이 아닌 곳으로 옮기고, 이후, n개의 원반을 목표 기둥으로 옮기는 작업을 반복하는 것입니다.

순환을 통해, 다음과 같이 하노이탑을 구현할 수 있습니다.

```Java
package DataStructure.Recursion;

public class HanoiTower {
    int n = 3; // 탑의 원반 개수
    int fromRod = 1; // 시작 기둥
    int toRod = 3; // 목표 기둥
    int auxRod = 2; // 보조 기둥



    public static void solveHanoi(int n, int fromRod, int toRod, int auxRod) {
        Main.cnt++;
        if (n == 1) {
            System.out.println("1번 원반을 " + fromRod + "번 기둥에서 " + toRod + "번 기둥으로 옮깁니다.");
            return;
        }

        solveHanoi(n - 1, fromRod, auxRod, toRod);
        System.out.println(n + "번 원반을 " + fromRod + "번 기둥에서 " + toRod + "번 기둥으로 옮깁니다.");
        solveHanoi(n - 1, auxRod, toRod, fromRod);
        }
}
```

순환을 이용할 경우 시간 복잡도는 O(2^n)입니다. 하노이 탑은 구현할 때마다 3개의 하위 문제로 분할되기 때문입니다.

---

## 피보나치 수열

```Java
package DataStructure.Recursion;

public class FibonacciSequence {
    public static int fibonacci(int n) {
        Main.cnt++;
        if (n==1) return 0;
        else if (n==2) return 1;
        else return fibonacci(n-2) + fibonacci(n-1);
    }
}
```

순환을 이용할 경우 시간 복잡도는 O(2^n)이므로, 위의 코드는 상당히 비효율적인 코딩입니다. 각 메소드가 독특한 값을 가지는 하노이 탑과 달리, 피보나치 수열은 항상 같은 값을 가지기 때문에, 메모이제이션을 통해, 시간 복잡도를 줄일 수 있습니다.

```Java
package DataStructure.Recursion;
import java.util.HashMap;

public class FibonacciSequenceMemo {
    private static HashMap<Integer, Integer> fibo = new HashMap<>();

    public static int fibonacci(int n) {
        Main.cnt++;
        if (n <= 0) return 0;
        else if (n == 1) return 0;
        else if (n == 2) return 1;
        else if (fibo.containsKey(n)) return fibo.get(n);
        else {
            int result = fibonacci(n - 1) + fibonacci(n - 2);
            fibo.put(n, result);
            return result;
        }
    }
}
```

HashMap은 값을 저장하는 자료구조라고 볼 수 있습니다. HashMap은 key 테이블과 value 테이블을 가집니다.

put(key, value)는 key 테이블에 key를 저장하고, 이에 대응하는 value를 value 테이블에 저장하는 역할을 합니다.

containsKey(key)는 해당 key의 이름을 가진 key가 있는지 확인하고, 있다면 true 없으면 false를 반환합니다.

get(key)는 해당 key에 대응하는 value를 반환합니다.

위의 프로그램을 실행할 경우, 시간 복잡도를 O(n)으로 줄일 수 있습니다.

```Java
package DataStructure.Recursion;
import static java.lang.Math.pow;

public class Main {
    public static int cnt = 0; // 연산 횟수

    public static void main(String[] args) {
        System.out.println("===== 거듭제곱 구하기 =====");
        System.out.println(GetPower.getPower(2,10) + "(연산 횟수: " + cnt + ")");
        System.out.println(pow(2,10));
        System.out.println();

        System.out.println("======= 하노이 탑 ======="); cnt = 0;
        HanoiTower.solveHanoi(7, 1, 3, 2);
        System.out.println("(연산 횟수: " + cnt + ")\n");

        System.out.println("======= 피보나치 수열 ======="); cnt = 0;
        for (int i = 1; i<=10; i++) System.out.print(FibonacciSequence.fibonacci(i) + " ");
        System.out.println();
        System.out.println("(연산 횟수: " + cnt + ")\n");

        System.out.println("== 메모이제이션 피보나치 수열 =="); cnt = 0;
        for (int i=1; i<=10; i++) System.out.print(FibonacciSequenceMemo.fibonacci(i) + " ");
        System.out.println("(연산 횟수: " + cnt + ")\n");
    }
}
```
# 3. 연결 리스트

## 개요

순서를 가지고 원소(노드)를 정렬한 것을 리스트(List)라고 부릅니다. 

---

## 연결 리스트

연결 리스트(Linked List)는 각 원소에 다음으로 가리킬 원소의 위치를 포함시킨 리스트를 의미합니다. 예를 들어, 학생을 학번대로 정렬하였을 때, 3번 학생의 정보에 4번 학생의 정보에 대한 위치를 명시하는 것을 우리는 연결 리스트라고 할 수 있습니다.

C에서는 연결 리스트를 주로 구조체(Struct)와 포인터(Pointer)를 통해 구현합니다.

---

## 단순 연결 리스트

단순 연결 리스트(Simply Linked List)는 각 노드가 앞에서 뒤로의 연결만을 가진 단방향성 연결 리스트입니다. 각 노드는 후행 노드를 가리키므로, 앞에서 뒤로의 접근은 가능하지만, 반대 방향으로의 접근은 불가능합니다.

<br/>

### Node 클래스

```Java
package DataStructure.LinkedList.SimplyLinkedList;

class Node {
    int data;
    Node next; // 객체 참조

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
```

단순 연결 리스트를 구현하기 위해 사용한, Node 클래스입니다. Node에는 data와 next라는 필드가 있으며, data는 해당 Node의 값을 정수형으로 저장합니다.

next는 Node 형태로 저장하여, 다음 객체의 주솟값을 저장합니다. Java에서는 C와 달리 포인터(Pointer)를 제공하지 않기에, 다음 값에 접근하기 위해 참조(Reference)를 사용합니다.

### SimplyLinkedList 클래스

```Java
package DataStructure.LinkedList.SimplyLinkedList;

class LinkedList {
    Node head;

    // 생성자
    LinkedList() {
        this.head = null;
    }

    // 새로운 노드를 리스트의 끝에 추가하는 메소드
    void append(int data) {
        Node newNode = new Node(data);
        // 리스트가 비어있는 경우
        if (head == null) {
            head = newNode;
            return;
        }
        Node current = head; // 1번째 노드 저장

        // current의 마지막 노드가 등장할 때까지 1번째 노드에서 끝까지 이동
        while (current.next != null) {
            current = current.next;
        }
        // 마지막 노드가 새로운 노드의 주소를 참조하게 함.
        current.next = newNode;
    }

    // 특정 값이 있는 노드를 삭제하는 메소드
    void remove(int data) {
        if (head == null) return; // 이미 리스트가 비어있으므로, 종료

        // 1번째 값일 경우
        if (head.data == data) {
            // 연결 리스트의 head 노드를 다음 노드인 head.next로 변경
            head = head.next;
            // 기존의 head 노드는 그 누구도 참조하지 않기 때문에, 가비지 컬렉터에서 메모리 해제
            return;
        }

        Node current = head;

        // 마지막 노드까지 반복
        while (current.next != null) {
            // 현재 노드의 다음 값(data)이 삭제하려는 값인 경우
            if (current.next.data == data) {
                // 현재 노드의 다음 노드를 다다음 노드로 변경
                current.next = current.next.next;
                return;
            }

            // 찾는 값이 아닌 경우 다음 노드로 넘어감.
            current = current.next;
        }
    }

    // 현재 리스트의 내용을 모두 표시하는 메소드
    void display() {
        Node current = head;
        while (current != null) {
            // 현재 값(data) 출력 후 다음 노드로 이동.
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.print("\n");
    }
}
```

위의 코드에서는 append()와 remove(), 그리고 display()를 지원합니다.

<br/>

### append() 메소드
```Java
void append(int data) {
        Node newNode = new Node(data);
        // 리스트가 비어있는 경우
        if (head == null) {
            head = newNode;
            return;
        }
        Node current = head; // 1번째 노드 저장

        // current의 마지막 노드가 등장할 때까지 1번째 노드에서 끝까지 이동
        while (current.next != null) {
            current = current.next;
        }
        // 마지막 노드가 새로운 노드의 주소를 참조하게 함.
        current.next = newNode;
    }
```

append() 메소드는 입력한 값을 리스트의 마지막에 추가하는 메소드입니다. 작동 방식은 다음과 같습니다.

(1) 입력한 값을 newNode라는 객체의 data에 저장합니다. newNode는 append() 메소드에서만 쓰이며, 누구도 참조하지 않습니다(next = null).

(2) 1번째 노드(head)가 비어있는 경우, 1번째 노드에 newNode를 정의하고 메소드를 반환합니다.

(3) 비어있는 리스트가 아닌 경우, current라는 객체에 현재 리스트의 1번째 노드의 값(data)과 그 노드가 참조하는 객체(next)를 저장합니다. 

(4) current의 마지막 노드가 등장할 때까지 1번째 노드에서 마지막 노드까지 이동합니다. ‘current.next’도 Node 타입이기 때문에, current에 정의할 수 있습니다.

(5) 마지막 노드에 도착한 경우, newNode를 마지막 노드가 참조하게 합니다.

append() 메소드는 n개의 노드를 탐색해야하기 때문에, 시간 복잡도는 O(n)입니다.

<br/>

### remove() 메소드
```Java
void remove(int data) {
        if (head == null) return; // 이미 리스트가 비어있으므로, 종료

        // 1번째 값일 경우
        if (head.data == data) {
            // 연결 리스트의 head 노드를 다음 노드인 head.next로 변경
            head = head.next;
            // 기존의 head 노드는 그 누구도 참조하지 않기 때문에, 가비지 컬렉터에서 메모리 해제
            return;
        }

        Node current = head;

        // 마지막 노드까지 반복
        while (current.next != null) {
            // 현재 노드의 다음 값(data)이 삭제하려는 값인 경우
            if (current.next.data == data) {
                // 현재 노드의 다음 노드를 다다음 노드로 변경
                current.next = current.next.next;
                return;
            }

            // 찾는 값이 아닌 경우 다음 노드로 넘어감.
            current = current.next;
        }
    }
```

remove() 메소드는 입력한 값을 리스트 내에 찾아 삭제하는 메소드입니다. 작동 방식은 다음과 같습니다.

(1) 비어있는 리스트인 경우, 메소드를 반환합니다.

(2) 연결 리스트의 1번째 노드(head)의 데이터(head.data)가 사용자가 입력한 값(data)과 일치할 경우, 1번째 노드를, 1번째 노드가 참조하는 노드(head.next)로 변경합니다. 둘은 같은 자료형(Node)입니다.

(3) 1번째 노드가 찾는 노드가 아닌 경우, current에 1번째 노드를 정의합니다. 

(4) 현재 노드(current)가 가리키는 객체(current.next)가 비어있을 때까지 또는 원하는 값을 찾을 때까지 시행을 반복합니다.

(4-1) 현재 노드의 다음 노드의 값(current.next.data)이 사용자가 입력한 값(data)와 같은 경우, 현재 노드의 다음 노드를 다다음 노드(current.next.next)로 변경합니다.

(4-2) ‘4-1’을 만족하지 않은 경우, 다음 노드로 넘어갑니다. 

(5) 삭제되는 노드는 누구도 참조하고 있지 않고, 자신도 누구도 참조하지 않기 때문에, 가비지 컬렉터(garbage collector)에서 감지하여 메모리를 해제합니다.

remove() 메소드도 마찬가지로 n개의 노드를 탐색해야하기 때문에, 시간 복잡도는 O(n)입니다.

<br/>

### display() 메소드
```Java
void display() {
        Node current = head;
        while (current != null) {
            // 현재 값(data) 출력 후 다음 노드로 이동.
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.print("\n");
    }
```

display() 메소드는 현재 리스트를 출력하는 메소드입니다. 작동 방식은 다음과 같습니다.

(1) current에 1번째 노드(head)를 저장합니다.

(2) 현재 노드(current)가 마지막 노드로 넘어갈 때까지 시행을 반복합니다.

(2-1) 현재 노드의 값(current.data)을 출력합니다.

(2-2) 다음 노드(current.next)로 넘어갑니다.

display() 메소드 또한, n개의 노드를 탐색 후 값을 출력하기 때문에, 시간 복잡도는 O(n)입니다.

<br/>

### 추가 기능

상속(Inheritance)를 통해, 개선된 SimplyLinkedList를 구현하였습니다.

```Java
package DataStructure.LinkedList.SimplyLinkedList;
import java.util.Scanner;

// LinkedList 클래스 상속
public class ImprovedLinkedList extends LinkedList {
    // 특정 위치에 데이터를 추가하는 메소드
    void insert(int data, int n) {
        // 자리를 보정합니다.
        n = n - 1;
        // 첫 번째 노드에 추가하는 경우
        Node newNode = new Node(data);
        if (n == 0) {
            // 추가할 노드가 1번째 노드 참조
            newNode.next = head;
            // 추가한 노드를 1번째 노드로 변경
            head = newNode;
            return;
        }
        Node current = head;
        for (int i = 0; i < n - 1 && current != null; i++) {
            current = current.next;
        }
        if (current == null) {
            System.out.println("오류: 유효하지 않은 범위입니다.");
            return;
        }
        // 새로운 노드가 현재 노드의 다음을 참조
        newNode.next = current.next;
        // 현재 노드가 새로운 노드를 참조하게 변경
        current.next = newNode;
    }

    // 특정 위치의 노드를 삭제하는 메소드.
    @Override
    void remove(int data) {
        Scanner sc = new Scanner(System.in);
        System.out.println("삭제할 것을 구체적으로 명시해주세요.\n1. 값 (기본)\n2. 위치");
        int mode = sc.nextInt();
        if (mode == 1) {
            super.remove(data);
        }
        else {
            if (head == null) {
                System.out.println(("리스트가 비어있습니다."));
                return;
            }
            // 1번째 노드 삭제
            if (data == 1) {
                head = head.next;
                return;
            }
            Node current = head;
            Node prev = null; // 이전 노드 저장
            int cnt = 0;

            // 노드가 종료되고, 입력값이 cnt와 일치할 때까지 반복
            while (current != null && cnt != data) {
                prev = current;
                current = current.next;
                cnt++;
            }

            if (current == null) {
                System.out.println("해당 위치에 노드가 없습니다.");
                return;
            }

            // 이전 노드가 현재 노드의 다음 노드를 가리키도록 변경
            prev.next = current.next;
        }
    }

    // 입력한 값이 몇 번째 칸에 있는지를 반환하는 메소드
    int search(int data) {
        Node current = head;
        int position = 1;

        while (current != null) {
            if (current.data == data) {
                return position;
            }
            current = current.next;
            position++;
        }
        // 값을 찾지 못한 경우, -1을 반환
        return -1;
    }
}
```

<br/>

### insert() 메소드
```Java
void insert(int data, int n) {
        // 자리를 보정합니다.
        n = n - 1;
        // 첫 번째 노드에 추가하는 경우
        Node newNode = new Node(data);
        if (n == 0) {
            // 추가할 노드가 1번째 노드 참조
            newNode.next = head;
            // 추가한 노드를 1번째 노드로 변경
            head = newNode;
            return;
        }
        Node current = head;
        for (int i = 0; i < n - 1 && current != null; i++) {
            current = current.next;
        }
        if (current == null) {
            System.out.println("오류: 유효하지 않은 범위입니다.");
            return;
        }
        // 새로운 노드가 현재 노드의 다음을 참조
        newNode.next = current.next;
        // 현재 노드가 새로운 노드를 참조하게 변경
        current.next = newNode;
    }
```

insert() 메소드는 매개변수로, data와 n을 받으며, data는 입력할 값을, int는 입력할 자리를 받습니다. 작동 방식은 다음과 같습니다.

(1) 코드에서 1번째 노드는 실제로는 0번째로 가정하였으므로, n의 값을 보정합니다.

(2) n이 0인 경우 (기존 n의 값은 1) 새로운 노드(newNode)가 1번째 노드(head)를 참조하게 합니다.

(3) 1번째 노드를 새로운 노드로 지정합니다.

(3) 1번째 노드를 현재 노드(current)로 지정하고, n이 0이 아닌 경우, n의 값을 증가시키며, 다음 노드로 계속 이동합니다. 이때, 현재 노드가 더 이상 넘길 노드가 없는 경우에도 반복을 중단합니다.

(4) 현재 노드가 아무것도 가리키지 않을 떄, 오류 메시지를 출력하고 반환합니다.

(5) 새로운 노드가 현재 노드의 다음을 참조하게 하고, 현재 노드가 새로운 노드를 참조하게 변경합니다.

insert() 메소드의 시간 복잡도는 O(n)입니다.

<br/>

### remove() 메소드 오버라이딩
```Java
@Override
    void remove(int data) {
        Scanner sc = new Scanner(System.in);
        System.out.println("삭제할 것을 구체적으로 명시해주세요.\n1. 값 (기본)\n2. 위치");
        int mode = sc.nextInt();
        if (mode == 1) {
            super.remove(data);
        }
        else {
            if (head == null) {
                System.out.println(("리스트가 비어있습니다."));
                return;
            }
            // 1번째 노드 삭제
            if (data == 1) {
                head = head.next;
                return;
            }
            Node current = head;
            Node prev = null; // 이전 노드 저장
            int cnt = 0;

            // 노드가 종료되고, 입력값이 cnt와 일치할 때까지 반복
            while (current != null && cnt != data) {
                prev = current;
                current = current.next;
                cnt++;
            }

            if (current == null) {
                System.out.println("해당 위치에 노드가 없습니다.");
                return;
            }

            // 이전 노드가 현재 노드의 다음 노드를 가리키도록 변경
            prev.next = current.next;
        }
    }
```

기존, remove() 메소드를 재정의(Overriding)하였습니다. 이번에는 특정 값이 아닌 특정 위치의 값을 삭제하는 메소드입니다. 작동 원리는 다음과 같습니다.

(1) 기존 방식과 같이 특정값을 삭제하고 싶은지를 사용자에게 묻고, 사용자가 원할 경우 기존의 방식(super.remove())으로 remove() 메소드를 실행합니다.

(2) 리스트가 비어있는 경우, 비어있다고 알린 후 함수를 반환합니다.

(3) 1번째 노드를 삭제하려고 한다면, 1번째 노드(head)가 가리키는 다음 노드(head.next)를 1번째 노드로 만듭니다.

(4) prev 노드는 이전 노드의 저장을 담당합니다.

(5) 사용자가 원하는 범위가 나오거나, 리스트가 종료될 때까지, 현재 노드를 다음 노드로 옮깁니다.

(6) 현재 노드가 비어있는 경우, 오류 메시지를 출력하고 반환합니다.

(7) 이전 노드가 참조하는 다음 노드(prev.next)를 현재 노드가 참조하는 다음 노드(current.next)로 변경합니다.

오버라이딩된 remove() 메소드 또한, 최악의 경우 모든 노드의 값을 순회해야하므로, 시간 복잡도는 O(n)입니다.

<br/>

### search() 메소드
```Java
int search(int data) {
        Node current = head;
        int position = 1;

        while (current != null) {
            if (current.data == data) {
                return position;
            }
            current = current.next;
            position++;
        }
        // 값을 찾지 못한 경우, -1을 반환
        return -1;
    }
```

search() 메소드는 입력한 값이 리스트의 어느 위치에 있는지를 반환합니다. 1번째 노드는 0이 아닌 1입니다. 작동 원리는 다음과 같습니다.

(1) 현재 노드(current)를 1번째 노드(head)로 설정하고, 위치에 대한 변수를 1로 초기화합니다.

(2) 현재 노드가 마지막 노드로 넘어갈 때까지 반복하며, 이때 위치 변수 값도 증가합니다. 현재 노드의 값이 사용자가 입력한 값과 같은 경우 위치 변수의 값을 반환합니다.

(3) 값을 찾지 못한 경우 -1을 반환합니다.

search() 메소드의 시간 복잡도는 O(n)입니다.

<br/>

### main() 메소드

실행 클래스 예시입니다.

```Java
package DataStructure.LinkedList.SimplyLinkedList;

public class Main {
    public static void main(String[] args) {
        ImprovedLinkedList ll = new ImprovedLinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.append(4);
        ll.append(5);
        ll.append(6);
        ll.display();
        ll.remove(2);
        ll.display();
        ll.insert(0, 3);
        ll.display();
        System.out.println(ll.search(6));
    }
}
```

모든 메소드의 시간 복잡도가 O(n)이므로, Java에서 구현한 단순 연결 리스트(Simply Linked List)의 시간 복잡도는 O(n)이 되는 것을 알 수 있습니다.

<br/>

---

## 이중 연결 리스트

이중 연결 리스트(Doubly Linked List)란, 각 노드가 앞과 뒤로의 연결을 가진 양방향성 연결 리스트입니다. 각 노드는 전행 노드와 후행 노드를 둘 다 가리키므로, 단순 연결 리스트와 달리 양방향으로 접근이 가능합니다.

<br/>

### Node 클래스

```Java
package DataStructure.LinkedList.DoublyLinkedList;

class Node {
    int data;
    Node prev;
    Node next;

    Node(int data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
```

이중 연결 리스트는 앞뒤 노드를 참조하므로, 두 번의 객체 참조를 하게 됩니다.

```Java
package DataStructure.LinkedList.DoublyLinkedList;

public class DoublyLinkedList {
    Node head;
    Node tail;

    DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }

    // 마지막 자리에 데이터 추가 메소드
    public void append(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
            return;
        }
        tail.next = newNode;
        newNode.prev = tail;
        tail = newNode;
    }

    // n번째 자리에 데이터 삽입하는 메소드
    void insert(int data, int n) {
        // n의 값을 보정합니다.
        n = n-1;
        Node newNode = new Node(data);
        // 1번째 노드에 입력하는 경우
        if (n==0) {
            // newNode가 참조하는 다음 노드를 기존 1번째 노드로 변경
            newNode.next = head;
            // 1번째 노드가 참조하는 전 노드를 newNode로 지정
            head.prev = newNode;
            // 1번째 노드를 newNode로 지정
            head = newNode;
            return;
        }
        Node current = head;
        for (int i=0; i<n-1 && current != null; i++) {
            current = current.next;
        }
        if (current == null) {
            System.out.println("오류: 유효하지 않은 범위입니다.");
            return;
        }
        // 새로운 노드의 다음 노드가 현재 노드의 다음 노드를 참조하게 변경
        newNode.next = current.next;
        // 현재 노드가 마지막 노드가 아닌 경우, 마지막 노드가 참조하는 노드의 이전을 newNode가 참조하게 변경.
        if (current.next != null) {
            current.next.prev = newNode;
        }
        else {
            tail = newNode; //current가 마지막 노드인 경우 tail을 업데이트
        }
        // 현재 노드가 다음 노드로 newNode를 참조
        current.next = newNode;
        // newNode가 이전 노드로 현재 노드를 참조
        newNode.prev = current;
    }

    void display() {
    Node current = head;
    while (current != null) {
        System.out.print(current.data + " -> ");
        current = current.next;
    }
    System.out.println();
    }

    void remove(int data) {
        Node current = head;

        // 헤드 노드부터 시작하여 값이 일치하는 노드를 찾음
        while (current != null) {
            if (current.data == data) {
                if (current == head) {
                    // 현재 노드를 1번째 노드로 변경
                    head = current.next;
                    if (head != null) {
                        // head가 이전 노드를 참조하지 않도록 변경
                        head.prev = null;
                    }
                    // 리스트가 비어있는 경우, 마지막 노드도 제거
                    if (head == null) {
                        tail = null;
                    }
                }
                else if (current == tail) {
                    tail = current.prev; // tail을 이전 노드로 변경
                    tail.next = null; // 변경된 마지막 노드가 다음 노드를 참조하지 않도록 변경
                } else {
                    // 시작과 끝이 아닌 경우
                    current.prev.next = current.next; // 이전 노드의 다음 노드를 현재 노드의 다음 노드를 참조하도록 설정
                    current.next.prev = current.prev; // 다음 노드의 이전 노드를 현재 노드의 이전 노드를 참조하도록 설정
                }
                return;
            }
            current = current.next;
        }
    }
}
```

<br/>

### append() 메소드 작동 방식
```Java
public void append(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
            return;
        }
        tail.next = newNode;
        newNode.prev = tail;
        tail = newNode;
    }
```

(1) 새로운 노드(newNode)에 데이터를 입력합니다.

(2) 리스트가 비어있을 경우, 시작 노드(head)와 마지막 노드(tail)를 새로운 노드로 정의합니다.

(3) 2를 만족하지 않는 경우, 마지막 노드가 참조하는 다음 노드를 새로운 노드로 정의합니다.

(3) 새로운 노드의 이전 노드를 기존 마지막 노드를 참조하도록 변경합니다.

(4) 마지막 노드를 새로운 노드로 정의합니다.

append() 메소드의 시간 복잡도는 O(n)입니다.

<br/>

### insert() 메소드 작동 방식
```Java
void insert(int data, int n) {
        // n의 값을 보정합니다.
        n = n-1;
        Node newNode = new Node(data);
        // 1번째 노드에 입력하는 경우
        if (n==0) {
            // newNode가 참조하는 다음 노드를 기존 1번째 노드로 변경
            newNode.next = head;
            // 1번째 노드가 참조하는 전 노드를 newNode로 지정
            head.prev = newNode;
            // 1번째 노드를 newNode로 지정
            head = newNode;
            return;
        }
        Node current = head;
        for (int i=0; i<n-1 && current != null; i++) {
            current = current.next;
        }
        if (current == null) {
            System.out.println("오류: 유효하지 않은 범위입니다.");
            return;
        }
        // 새로운 노드의 다음 노드가 현재 노드의 다음 노드를 참조하게 변경
        newNode.next = current.next;
        // 현재 노드가 마지막 노드가 아닌 경우, 마지막 노드가 참조하는 노드의 이전을 newNode가 참조하게 변경.
        if (current.next != null) {
            current.next.prev = newNode;
        }
        else {
            tail = newNode; //current가 마지막 노드인 경우 tail을 업데이트
        }
        // 현재 노드가 다음 노드로 newNode를 참조
        current.next = newNode;
        // newNode가 이전 노드로 현재 노드를 참조
        newNode.prev = current;
    }
```

(1) 프로그램 내에서의 자릿수와 사용자의 자릿수가 다르므로, 보정을 해주고 새로운 노드(newNode)에 데이터를 입력합니다.

(2) 1번째 노드에 입력하는 경우, 새로운 노드가 시작 노드(head)를 참조하게 합니다.

(2-1) 기존 1번째 노드(head)가 참조하는 이전 노드를 새로운 노드로 정의합니다.

(2-2) 1번째 노드를 새로운 노드로 정의하고 반환합니다.

(3) 2를 만족하지 않는 경우 현재 노드(current)를 정의하고, 시작 노드부터 마지막 노드에 도착할 때까지 노드를 넘깁니다.

(3-1) 지정한 범위가 유효하지 않은 경우 오류 메시지를 출력합니다.

(3-2) 현재 노드의 다음 노드로 새로운 노드를 참조하게 합니다.

(3-3) 새로운 노드의 이전 노드로 현재 노드를 참조하게 합니다.

insert() 메소드의 시간 복잡도는 O(n)입니다.

<br/>

### remove() 메소드 작동 방식
```Java
void remove(int data) {
        Node current = head;

        // 헤드 노드부터 시작하여 값이 일치하는 노드를 찾음
        while (current != null) {
            if (current.data == data) {
                if (current == head) {
                    // 현재 노드를 1번째 노드로 변경
                    head = current.next;
                    if (head != null) {
                        // head가 이전 노드를 참조하지 않도록 변경
                        head.prev = null;
                    }
                    // 리스트가 비어있는 경우, 마지막 노드도 제거
                    if (head == null) {
                        tail = null;
                    }
                }
                else if (current == tail) {
                    tail = current.prev; // tail을 이전 노드로 변경
                    tail.next = null; // 변경된 마지막 노드가 다음 노드를 참조하지 않도록 변경
                } else {
                    // 시작과 끝이 아닌 경우
                    current.prev.next = current.next; // 이전 노드의 다음 노드를 현재 노드의 다음 노드를 참조하도록 설정
                    current.next.prev = current.prev; // 다음 노드의 이전 노드를 현재 노드의 이전 노드를 참조하도록 설정
                }
                return;
            }
            current = current.next;
        }
    }
```

(1) 입력한 값이 시작 노드(head)에 있을 경우, 시작 노드를 현재 노드로 변경합니다.

(2) 변경한 1번째 노드(head)가 있는 경우, 1번째 노드의 이전 노드가 아무것도 참조하지 않도록 합니다.

(3) 리스트가 비어있을 경우, 마지막 노드(tail)도 제거합니다. 이중 연결 리스트에서 자료가 1개만 있을 경우, 시작 노드와 마지막 노드가 같기 때문입니다.

(4) 입력한 값이 마지막 노드에 있을 경우, 마지막 노드를 이전 노드로 변경합니다.

(5) 변경한 마지막 노드가 다음 노드를 참조하지 않도록 합니다.

(6) 입력한 값이 시작과 끝이 아닌 경우, 이전 노드의 다음 노드를 현재 노드의 다음 노드를 참조하도록 합니다.

(7) 또한, 다음 노드의 이전 노드를 현재 노드의 이전 노드를 참조하도록 합니다.

(8) 만족할 때까지, 현재 노드를 다음 노드로 옮깁니다.

remove() 메소드의 시간 복잡도는 O(n)입니다.

<br/>

### display() 메소드 작동 방식
```Java
void display() {
    Node current = head;
    while (current != null) {
        System.out.print(current.data + " -> ");
        current = current.next;
    }
    System.out.println();
    }
```

단순 연결 리스트와 동일하므로, 생략합니다. 시간 복잡도는 O(n)입니다.

display() 메소드의 시간 복잡도는 O(n)입니다.

<br/>

### main() 메소드

실행 클래스 예시입니다.

```Java
package DataStructure.LinkedList.DoublyLinkedList;

public class Main {
    public static void main(String[] args) {
        DoublyLinkedList dl = new DoublyLinkedList();
        dl.append(0);
        dl.insert(1, 1);
        dl.insert(2, 1);
        dl.insert(3, 1);
        dl.insert(4, 1);
        dl.remove(0);
        dl.display();
    }
}
```

모든 메소드의 시간 복잡도가 O(n)이므로, Java에서 구현한 이중 연결 리스트(Doubly Linked List)의 시간 복잡도는 O(n)이 되는 것을 알 수 있습니다.

<br/>

---

## 원형 연결 리스트

원형 연결 리스트(Circular Linked List)는 마지막(tail) 노드가 시작(head) 노드를 가리키는 연결 리스트입니다. 단순 연결 리스트에서 마지막 노드가 시작 노드를 참조하도록 하여 간단히 구현할 수 있습니다.

<br/>

### Node 클래스

```Java
package DataStructure.LinkedList.CircularLinkedList;

class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}
```

단순 연결 리스트와 동일한 구조입니다.

```Java
package DataStructure.LinkedList.CircularLinkedList;

public class CircularLinkedList {
    Node head;
    Node tail;

    CircularLinkedList() {
        this.head = null;
        this.tail = null;
    }

    // 노드를 리스트 끝에 추가하는 메서드
    public void append(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
            newNode.next = head; // 리스트가 비어있을 때는 자기 자신을 가리킴
        } else {
            tail.next = newNode;
            tail = newNode;
            tail.next = head; // tail의 다음 노드는 head를 가리킴 (원형)
        }
    }

    // 노드를 삭제하는 메소드
    void remove(int data) {
        if (head == null) {
            System.out.println("오류: 리스트가 비어 있습니다.");
            return;
        }

        Node current = head;
        Node prev = null;

        // 리스트를 순회하며 값을 찾음
        do {
            if (current.data == data) {
                // 특정한 값을 찾았을 때
                if (prev != null) {
                    prev.next = current.next;
                    if (current == tail) {
                        tail = prev; // 마지막 노드일 경우 tail 업데이트
                    }
                } else {
                    // 첫 번째 노드를 삭제할 경우
                    head = head.next;
                    tail.next = head; // tail의 다음 노드는 head를 가리킴 (원형)
                }
                return;
            }
            prev = current;
            current = current.next;
        } while (current != head);

        System.out.println("오류: 값이 리스트에 없습니다.");
    }

    public void display() {
        Node current = head;
        if (head == null) {
            System.out.println("오류: 리스트가 비어 있습니다.");
            return;
        }
        do {
            System.out.print(current.data + " ");
            current = current.next;
        } while (current != head);
        System.out.println();
    }
}
```

### append() 메소드 작동 방식
```Java
public void append(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
            newNode.next = head; // 리스트가 비어있을 때는 자기 자신을 가리킴
        } else {
            tail.next = newNode;
            tail = newNode;
            tail.next = head; // tail의 다음 노드는 head를 가리킴 (원형)
        }
    }
```

(1) 새로운 노드(newNode)에 입력한 값을 저장합니다.

(2) 리스트가 비어있는 경우 1번째 노드(head)와 마지막 노드(tail)에 해당 노드를 저장하고, 자신의 다음 노드를 자신의 노드(head)를 참조하게 합니다.

(3) 마지막 노드의 다음 노드가 새로운 노드를 참조하게 합니다.

(4) 새로운 노드를 마지막 노드로 정의하고, 마지막 노드가 1번째 노드를 참조하게 합니다.

시간 복잡도는 O(n)입니다.

<br/>

### remove() 메소드 작동 방식
```Java
void remove(int data) {
        if (head == null) {
            System.out.println("오류: 리스트가 비어 있습니다.");
            return;
        }

        Node current = head;
        Node prev = null;

        // 리스트를 순회하며 값을 찾음
        do {
            if (current.data == data) {
                // 특정한 값을 찾았을 때
                if (prev != null) {
                    prev.next = current.next;
                    if (current == tail) {
                        tail = prev; // 마지막 노드일 경우 tail 업데이트
                    }
                } else {
                    // 첫 번째 노드를 삭제할 경우
                    head = head.next;
                    tail.next = head; // tail의 다음 노드는 head를 가리킴 (원형)
                }
                return;
            }
            prev = current;
            current = current.next;
        } while (current != head);

        System.out.println("오류: 값이 리스트에 없습니다.");
    }
```

(1) 리스트가 비어있는 경우, 비어있다고 알리고 반환합니다.

(2) 현재 노드(current)를 1번째 노드(head)로 지정하고, 이전 노드(prev)를 선언합니다. 이전 노드는 아무것도 참조하지 않습니다.

(3) 입력한 데이터가 찾는 값이며, 이전 노드가 아무런 값을 참조하지 않을 때, 이전 노드가 현재 노드의 다음을 참조하게 합니다.

(4) 이어서, 현재 노드가 마지막 노드(tail)였을 경우, 이전 노드를 마지막 노드로 변경합니다.

(5) 1번째 노드를 삭제하는 경우, 1번째 노드를 1번째 노드의 다음 노드로 변경합니다.

(6) 마지막 노드가 변경된 1번째 노드를 참조하게 합니다.

(7) 위 실행을 마무리한 경우 메소드를 반환하고, 아닌 경우 이전 노드를 현재 노드로 정의하고, 다음 노드로 넘깁니다. 

(8) 현재 노드가 다시 시작 노드로 돌아올 떄까지 실행(1~7)을 반복합니다. 

시간 복잡도는 O(n)입니다.

<br/>

### display() 메소드 작동 방식
```Java
public void display() {
        Node current = head;
        if (head == null) {
            System.out.println("오류: 리스트가 비어 있습니다.");
            return;
        }
        do {
            System.out.print(current.data + " ");
            current = current.next;
        } while (current != head);
        System.out.println();
    }
```

단순 연결 리스트와 비슷하지만, 다시 현재 노드가 시작 노드로 돌아가면 실행을 종료합니다.

시간 복잡도는 O(n)입니다.

<br/>

### main() 메소드

단순 연결 리스트와 동일하므로, 생략합니다.

모든 메소드의 시간 복잡도가 O(n)이므로, Java에서 구현한 원형 연결 리스트(Circular Linked List)의 시간 복잡도는 O(n)이 되는 것을 알 수 있습니다.

<br/>

---

## 연결 리스트의 장단점

연결 리스트는 배열과 비슷하여, 연결 리스트를 이용에 의문을 가질 수 있지만, 연결 리스트는 배열과는 차별화된 장점을 가지고 있습니다.

<br/>

### 연결 리스트 장점

(1) 데이터의 삽입 및 삭제의 용이성

연결 리스트는 데이터를 삽입하거나 삭제할 때 배열과 달리 자리를 재배열할 필요가 없습니다. 에를 들어, {1, 2, 4, 5}인 배열에서 2와 4 사이에 3을 넣으려면, 2와 4 사이에 3을 넣고, 4와 5를 재배열해야하지만, 연결 리스트의 경우 서로간의 연결만 조율하면 됩니다.

(2) 크기 변경의 가변성

배열은 동적 할당을 하더라도, 처음 지정한 크기를 변경할 수 없습니다. 그러나, 연결 리스트의 경우 크기의 개념이 없으며, 삽입과 삭제가 용이하므로, 공간을 동적으로 할당 및 해제할 수 있습니다.

(3) 메모리 사용의 효율성

배열은 연속된 메모리 공간을 사용하는데, 이는 C에서도 확인할 수 있습니다. 연결 리스트는 각 요소가 다른 메모리 위치에 저장되므로 메모리 공간을 유연하게 활용할 수 있습니다.

<br/>

### 연결 리스트 단점

(1) 느린 속도

특정 위치에 있는 요소에 접근하려면 참조를 통해 순차적으로 접근을 해야합니다. 이는 배열과 달리 임의 접근이 느린 경우가 많습니다. 예를 들어, 배열과 단순 연결 리스트에서 n번째 값에 접근하기 위해서, 배열은 한 번의 연산(시간 복잡도: O(1))만 하면 되지만, 단순 연결 리스트의 경우 n번의 연산(시간 복잡도: O(n))이 요구됩니다.

(2) 메모리 사용의 효율성

각 요소마다 포인터가 필요하므로 연결 리스트는 배열보다 더 많은 메모리를 소비할 수 있습니다.
# 4. 스택과 큐

## 개요

스택(Stack)은 후입선출(LIFO: Last In First Out) 특성을 가진 자료구조입니다. 가장 먼저 들어간 데이터가 가장 먼저 추출됩니다.

큐(Queue)는 선입선출(FIFO: First In First Out) 특성을 가진 자료구조입니다. 가장 먼저 들어간 데이터가 가장 나중에 추출됩니다.

<br/>

---

## 배열로 구현한 스택과 큐

배열로 스택과 큐를 구현할 경우, 데이터의 재배열이 요구될 수 있습니다.

<br/>

```Java
package DataStructure.StacksAndQueue.WithArray;

class Stack {
    int maxSize;
    int[] stackArray;
    int top;

    Stack(int size) {
        this.maxSize = size;
        this.stackArray = new int[maxSize];
        this.top = -1;
    }

    boolean isFull() {
        return (top == maxSize - 1);
    }

    boolean isEmpty() {
        return (top == -1);
    }

    void push(int value) {
        if (isFull()) {
            System.out.println("오류: 최대 용량에 도달하였습니다.");
            return;
        }
        stackArray[++top] = value;
    }

    int pop() {
        if (isEmpty()) {
            System.out.println("오류: 배열이 비어 있습니다.");
            return -1;
        }
        return stackArray[top--];
    }

    void display() {
        if (isEmpty()) return;
        System.out.print("Stack: ");
        for (int i = top; i >= 0; i--) {
            System.out.print(stackArray[i] + " -> ");
        }
        System.out.println();
    }
}
```

### Stack 클래스의 생성자
```Java
Stack(int size) {
        this.maxSize = size;
        this.stackArray = new int[maxSize];
        this.top = -1;
    }
```

사용자에게 size만 받고, size에 맞는 배열을 생성합니다. top은 데이터가 있는 노드의 마지막 번호입니다.

<br/>

### Stack 클래스의 push() 메소드
```Java
void push(int value) {
        if (isFull()) {
            System.out.println("오류: 최대 용량에 도달하였습니다.");
            return;
        }
        stackArray[++top] = value;
    }
```

(1) 배열의 최대 크기에 도달하였다면, 오류 메시지를 출력하고 반환합니다.

(2) 입력한 값을 데이터가 있는 칸의 다음 위치에 값을 저장합니다. 

<br/>

### Stack 클래스의 pop() 메소드
```Java
int pop() {
        if (isEmpty()) {
            System.out.println("오류: 배열이 비어 있습니다.");
            return -1;
        }
        return stackArray[top--];
    }
```

(1) 배열이 비어있는 경우, 오류 메시지를 출력하고 -1을 반환합니다.

(2) 데이터가 있는 마지막 칸의 데이터를 반환하고, 마지막 칸(top)을 이전 칸(top-1)으로 정의합니다.

<br/>

```Java
package DataStructure.StacksAndQueue.WithArray;

class Queue {
    private int[] array;
    private int front;
    private int rear;
    private int capacity;

    Queue(int size) {
        this.capacity = size;
        this.array = new int[capacity];
        this.front = 0;
        this.rear = -1;
    }

    boolean isEmpty() {
        return rear == -1;
    }

    boolean isFull() {
        return rear == capacity - 1;
    }

    void push(int value) {
        if (isFull()) {
            System.out.println("오류: 최대 용량에 도달하였습니다.");
            return;
        }
        array[++rear] = value;
    }

    void pop() {
        if (isEmpty()) {
            System.out.println("오류: 배열이 비어 있습니다.");
            return;
        }
        front++;
        if (front == capacity) {
            front = 0;
            rear = -1;
        }
    }

    public void display() {
        if (isEmpty()) return;
        System.out.print("Queue: ");
        for (int i = front; i <= rear; i++) {
            System.out.print(array[i] + " -> ");
        }
        System.out.println();
    }
}
```

### Queue 클래스의 생성자
```Java
Queue(int size) {
        this.capacity = size;
        this.array = new int[capacity];
        this.front = 0;
        this.rear = -1;
    }
```

stack과 비슷하지만, 가장 1번째 값과 마지막 값에 대한 변수를 지정합니다.

<br/>

### Queue 클래스의 push() 메소드
```Java
void push(int value) {
        if (isFull()) {
            System.out.println("오류: 최대 용량에 도달하였습니다.");
            return;
        }
        array[++rear] = value;
    }
```

(1)  배열의 최대 크기에 도달하였다면, 오류 메시지를 출력하고 반환합니다.

(2) 입력한 값을 마지막 칸의 다음 위치에 저장합니다.

<br/>

### Queue 클래스의 pop() 메소드
```Java
void pop() {
        if (isEmpty()) {
            System.out.println("오류: 배열이 비어 있습니다.");
            return;
        }
        front++;
        if (front == capacity) {
            front = 0;
            rear = -1;
        }
    }
```

(1) 배열이 비어있는 경우, 오류 메시지를 출력하고 -1을 반환합니다.

(2) 1번째 값의 위치를 조율합니다.

(3) 1번째 값의 위치가 최대 용량에 도착한 경우, 배열의 위치를 초기화합니다.

<br/>

### main() 메소드

실행 클래스 예시입니다.

```Java
package DataStructure.StacksAndQueue.WithArray;


public class Main {
    public static void main(String[] args) {
        Stack st = new Stack(5);
        Queue qu = new Queue(5);

        for (int i=0; i<5; i++) {
            st.push(i + 1);
            qu.push(i + 1);
        }
        st.display();
        qu.display();
        System.out.println("==========pop 이후==========");
        st.pop();
        st.pop();
        qu.pop();
        qu.pop();
        st.display();
        qu.display();
    }
}
```

배열로 구현한 스택과 큐는 모두 O(1)의 시간 복잡도를 가집니다. 데이터를 리스트에 추가하는 것과 삭제하는 것에 연산이 크게 요구되지 않기 때문입니다.

<br/>

---

## 연결 리스트로 구현한 스택과 큐

연결 리스트를 이해했다면, 연결 리스트를 통해 스택과 큐를 구현하는 것은 간단합니다. 다음은 단순 연결 리스트를 통해 스택과 큐를 구현할 때, pop() 메소드가 어떤 노드를 삭제하는지에 따라서 스택과 큐로 나뉩니다.

<br/>

### StackAndQueue 클래스

```Java
package DataStructure.StacksAndQueue.WithLinkedList;

class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}
```
```Java
package DataStructure.StacksAndQueue.WithLinkedList;

import DataStructure.StacksAndQueue.WithLinkedList.Node;

public abstract class StackAndQueue {
    Node head;

    // 생성자
    StackAndQueue() {
        this.head = null;
    }

    // 새로운 노드를 리스트의 시작 부분에 추가하는 메소드
    void push(int data) {
        Node newNode = new Node(data);
        // 리스트가 비어있는 경우
        if (head == null) {
            head = newNode;
            return;
        }

        newNode.next = head;
        head = newNode;
        return;
    }

    // 특정 값이 있는 노드를 삭제하는 메소드
    abstract void pop();

    // 현재 리스트의 내용을 모두 표시하는 메소드
    void display() {
        Node current = head;
        while (current != null) {
            // 현재 값(data) 출력 후 다음 노드로 이동.
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.print("\n");
    }
}
```

스택과 큐의 공통되는 부분이며, 추상 클래스로 구현하여 상속을 통해서만 생성될 수 있습니다.

```Java
void push(int data) {
        Node newNode = new Node(data);
        // 리스트가 비어있는 경우
        if (head == null) {
            head = newNode;
            return;
        }

        newNode.next = head;
        head = newNode;
        return;
    }
```

push() 메소드는, 리스트의 첫 번째 노드에 데이터를 추가합니다.

```Java
abstract void pop();
````

pop() 메소드는, 자식 클래스가 오버라이딩하여 각자의 정의대로 데이터를 추출합니다.

<br/>

### Stack 클래스의 pop() 메소드 오버라이딩

```Java
package DataStructure.StacksAndQueue.WithLinkedList;

public class Stack extends StackAndQueue {

    // 1번째 노드를 삭제하는 메소드
    @Override
    void pop() {
        if (head == null) return;
        head = head.next;
        return;
    }
}
```

스택은 후입선출 방식을 채택하기 때문에, pop() 메소드는 첫 번째 노드를 추출합니다.

<br/>

### Queue 클래스의 pop() 메소드 오버라이딩

```Java
package DataStructure.StacksAndQueue.WithLinkedList;

public class Queue extends StackAndQueue {

    // 마지막 노드를 삭제하는 메소드
    @Override
    void pop() {
        if (head == null) {
            return;
        }

        if (head.next == null) {
            head = null;
            return;
        }

        Node current = head;
        Node prev = null;
        while (current.next != null) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
    }
}
```


큐는 선입선출 방식을 채택하기 때문에, pop() 메소드는 마지막 노드를 추출합니다. 

<br/>

### main() 메소드

실행 클래스 예시입니다.

```Java
package DataStructure.StacksAndQueue.WithLinkedList;

public class Main {
    public static void main(String[] args) {
        Stack st = new Stack();
        Queue qu = new Queue();

        for (int i=0; i<5; i++) {
            st.push(i + 1);
            qu.push(i + 1);
        }
        System.out.print("Stack: ");
        st.display();
        System.out.print("Queue: ");
        qu.display();
        System.out.println("==========pop 이후==========");
        st.pop();
        st.pop();
        qu.pop();
        qu.pop();
        System.out.print("Stack: ");
        st.display();
        System.out.print("Queue: ");
        qu.display();
    }
}
```

단순 연결 리스트 방식을 채택하기 때문에 시간 복잡도는 마찬가지로 O(n)입니다.
