var store = [{
        "title": "C++ char 정리",
        "excerpt":"CHAR   1 Pointer 선언      char* v;            v는 문자, 문자열이 저장된 메모리의 첫 주소를 저장할 수 있는 포인터 변수       char* v = \"문자열 상수 1\"; 초기화 했어도 코드 중에는 언제든 변경 가능           const char* v;            v는 다시 문자열이 저장된 메모리의 첫주소를 저장할 수 있는 포인터 변수. v 주소 메모리의 내용은 변경 불가 즉 v는 상수 문자열의 포인터변수       const의 대상이 v자체가 아니므로 v가 가리키는 주소는 변경 가능함       const char* v = \"문자열 상수 1\";로 초기화함. 이 때, v = \"문자열 상수 2\"; 는 가능 하지만 *v = \"문자열 상수 2\";는 불가능. 이건 v 주소 메모리의 값을 변경하려 한 것이므로.           char* const v;            v는 문자열이 저장된 메모리의 첫주소를 저장할 수 있는 포인터 변수       초기화할 때 한번 지정된 문자열 메모리 주소 변경 못함.       char* const v = \"문자열 상수1\";로 초기화 했을 때, v = \"문자열 상수2\";는 불가능하단 소리임           2 Pointer   char형 포인터(문자열 표현 방법)   char str[20] = \"Good Morning!\"; 이는 배열을 기반으로 하는 변수 형태의 문자열 선언. 변수라고 하는 이유는 문자열의 일부를 변경할 수 있기 때문. 문자열 전체를 저장하는 배열.   [G][o]…[!][\\0]   char* str2 = \"This is string\";으로도 선언 가능. 이는 포인터를 기반으로 문자열을 선언한 것. 이렇게 선언하면 메모리 공간에 문자열 This is string이 저장되고 문자열의 첫번째 문자 T의 주소값이 반환된다. 그리고 이 반환 값은 포인터 변수 str2에 저장된다.&lt;/br&gt; char형 포인터로 선언하면 첫번째 문자의 주소값이 저장된다   str2—————&gt;[This is string\\0]                          char형 배열       char형 포인터                       가리키는 위치 변경       불가능       가능                 문자열 내용 변경       가능       불가능           printf 함수는 문자열을 전달 받지 않고 문자열의 주소 값을 전달 받는 함수다.&lt;/br&gt; char* strArr[3] = {\"apple\",\"banana\",\"cinamon\"};으로 선언 시 strArr[1]은 “banana”임.   3 char vs string  참고      생성            char : char arr\\[size\\];       string : string s;           표준 입력 받아오기            char : 공백, 개행 무시. for문 돌려서 일일이 받아와도 되지만 배열 전체로 받아와도 된다       string : 공백, 개행 무시 #include &lt;string&gt; 필요           문자열 개수            char : strlen(const char*);, int size = strlen(arr);       string : length();, int size = s.length();           표준 입력 읽어오기            char :           cin.getline(_Elem *_Str, streamsize _count, _Elem _Delim = '\\n')               //변수 주소, 최대 입력 가능 문자수, 종결 문자(default는 '\\n')   cin.getline(arr,SIZE);                       string의 경우           getline(cin,s);         //위의 cin.getline과 비슷한 맥락         //그러나 최대 입력 가능 문자수를 입력하지 않아도 된다.                             참고 사이트     https://igotit.tistory.com/entry/char-const-char-char-const   https://m.blog.naver.com/jsky10503/221131378623   https://m.blog.naver.com/jsky10503/221133942782   https://m.blog.naver.com/jsky10503/221134770777  ","categories": ["studying"],
        "tags": ["cpp","char"],
        "url": "http://localhost:4000/studying/cpp-char/",
        "teaser": "http://localhost:4000/assets/images/star.jpg"
      },{
        "title": "finally",
        "excerpt":"github blog를 완성하였다. 저번에는 어려워서 포기했지만 이래저래 필요성을 느꼈기에 오늘 마음먹고 끝내버렸다. 아직 카테고리를 수정하지 못하지만 기말고사 끝나고 파일 올리면서 수정해보도록 해야겠다. 그보다 GEM이 제일 신기하다. 세상이 많이 발전했구나.   참고 링크           minimal mistakes를 이용해 page 만들기            CSS - SCSS 관련 설정하기            프로필 관련 설정       수정해야 할 것들      카테고리 수정   sitemap.xml 설정 -&gt; 이거는 등록해놓고 며칠 걸린다고 한다   이미지 파일 넣기 확인  ","categories": ["diary"],
        "tags": [],
        "url": "http://localhost:4000/diary/finally/",
        "teaser": "http://localhost:4000/assets/images/star.jpg"
      },{
        "title": "record",
        "excerpt":"1015  말로만 듣던 푸라닭의 블랙 올리브 치킨을 시켜먹었다.   음식을 먹고 감동받은 게 되게 간만이였다. 너무 감동해서 다음 주에 또 시켜먹었는데 그 때도 맛있었다. 이제 좋은 일 있거나 힘든 일 있으면 이 치킨 시켜먹는걸로 약속.      1023  결국 먹었다. 빕스. 8월에 사놨었던 쿠폰을 코로나 때문에 이래저래 못쓰다가 사회적 거리두기 단계가 내려가서 쏠랑 갔다왔다.   레어로 주문해서 slice하기 힘들었지만 맛있었다. 진짜로 고기가 최고다.      1104  며칠 전에 백만년만에 만난 윤아랑 먹은 우주 케이크.   이제는 엄청 맛있다고 느껴지지는 않지만 커피와 마시기에는 딱 좋다. 그리고 친구들에게 새로 추천해줄 때에도 이만큼 좋은 케이크가 없다.      다시 보니까 또 먹고싶다.  ","categories": ["diary"],
        "tags": ["food"],
        "url": "http://localhost:4000/diary/cake/",
        "teaser": "http://localhost:4000/assets/images/star.jpg"
      }]
