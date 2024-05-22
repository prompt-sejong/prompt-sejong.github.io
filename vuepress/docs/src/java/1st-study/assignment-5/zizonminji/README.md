---
sidebar: auto
---
# 자바 스터디 - 5주차
## 클래스

클래스는 객체를 만들어내기 위한 설계도 또는 툴  
클래스 모양 그대로 찍어낸 실체 = 객체  
EX) 붕어빵 틀: 클래스, 붕어빵: 객체(인스턴스)  

<br>

```java
//클래스 선언
public class Circle{
//멤버 변수 정의
public int radius;
public String name;

//생성자 생성 
public Circle(){
}

//메소드 생성
public double getArea(){
	return 3.14*radius*radius;
	}
}
```

<br>

**클래스의 구성**  

자바의 클래스는 `class` 키워드를 사용하여 선언함  

클래스의 구성요소를 멤버라고 부름, 멤버는 속성을 표현하는 **필드**와 기능을 나타내는 **메소드**를 가짐  

클래스는 생성된 객체의 필드를 초기화해주는 메소드인 생성자를 가짐  

**필드:** 객체 내에 값을 저장할 멤버 변수  

ㄴ 클래스 변수  
ㄴ 인스턴스 변수  
ㄴ 지역변수   
<br>

**메소드:** 함수, 객체의 행동을 구현  

**생성자:** 클래스의 이름과 동일한 메소드  

생성자는 객체가 생성될 때 자동으로 호출되는 특별한 메소드  

객체의 생성과 동시에 인스턴스 변수를 원하는 값으로 초기화할 수 있는 메소드  

<br>

## 인스턴스  
<br>

```java
//Circle 객체를 생성한 것이 아니라, 
//변수 pizza는 Circle 클래스의 객체에 대한 주소를 가지는 변수
Circle pizza;

//new 연산자로 객체를 생성함
//생성된 Circle 객체의 주소를 pizza 변수에 대입 
pizza=new Circle();

//레퍼런스 변수 선언과 동시에 객체 생성
Circle pizza=new Circle();
```
<br>
new는 클래스 타입의 인스턴스(객체)를 생성해주는 역할  

new 연산자를 통해 heap 영역에 데이터를 저장할 공간을 할당받음  

해당하는 공간에 대한 참조값을 객체(위에서는 pizza)에게 반환하고 생성자를 호출함  

객체의 멤버에 접근하려면 .(점) 연산자를 사용함   
<br>

```java
pizza.radius = 50;
```

<br>
위 점 연산자는 클래스의 접근 제한자에 따라서 사용할 수도 있고 사용하지 못할 수도 있음   
그러나 자바같이 객체 지향 언어에서는 보통 멤버 변수를 접근 제한자로 보호해놓고 (private, protected 등)  
setter, getter 등으로 초기화 및 변경을 하도록 함. (데이터에 대한 무분별한 접근 제한)  
<br>

**메소드** 또한 아래와 같이 정의할 수 있음     

<br>

```java
[접근제한자] [리턴타입] [함수이름] ([매개변수]){
...
}
```

<br>

```java
public class minji{
	private int a;
	
	public void setA(int a){
		this.a=a;
	}
	
	public int getA(){
		return a;
	}
}
```

<br>

생성자: 객체가 생성될 때 동시에 실행됨  
매개변수 개수, 종류에 따라 다르게 정의할 수 있음   
생성자는 클래스 이름과 동일해야 하며 리턴 타입이 없음  
객체가 생성될 때 자동으로 한번만 호출됨  

**※주의**    
  
생성자를 하나도 생성하지 않으면 디폴트 생성자만 만들어짐  
그러나 하나라도 생성하면 디폴트 생성자는 생성되지 않음  
<br>

```java
public class minji{
	String name;
	int age;
	
	//생성자는 클래스 이름과 동일함
	//디폴트 생성자 형태
	//public minji(){}
	
	public minji(String name, int age){
	this.name=name;
	this.age=age;
	}
}
```

  <br>

이 때 메인에서 `minji a=new minji(’kim’, 20);`을 통해 직접 선언한 생성자를 이용하여 객체를 만들 수 있음  
그러나 위 코드에서는 디폴트 생성자가 없으므로 `minji a=new minji();` 로는 객체 생성이 불가능함  

**this 키워드**는 **멤버 함수가 호출한 객체의 주소를 가리키는 포인터**로,  
객체의 멤버 변수의 이름과 같은 매개변수가 있을 경우 또는 함수 체이닝 기법을 사용할 때 자주 쓰임  
