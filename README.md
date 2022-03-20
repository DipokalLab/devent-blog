![head](./head.png)


# devent-blog
데벤트 기술 블로그

## To-Do

* [x] devent-frame 프로젝트 기반/로직 설계
* [x] 데이터베이스 설계/연동
* [x] 피드 작성/접근 제한
* [x] 피드 불러오기/URL 지정
* [x] 피드 마크다운 에디터
* [x] 피드 삭제
* [ ] 피드 수정
* [ ] 프로필 불러오기
* [x] 아티클 불러오기/지정
* [x] 아티클을 포함한 게시글 불러오기
* [x] 아티클 생성
* [ ] 태그 불러오기/태그를 포함한 게시글 불러오기
* [ ] 디자인 리팩토링
* [x] 이미지 업로드
* [ ] 테스트 코드 설계



## 실행

**의존성 설치**

```
npm install
```
**실행**

```
npm run start
```

## 배포

#### STEP.1 deployenv 설정

```
VIRTUAL_HOST=blog.devent.kr,LETSENCRYPT_HOST=blog.devent.kr,LETSENCRYPT_EMAIL=hhj.devent.kr,DB_USER=root,DB_PASS=testtesttest,DB_HOST=172.17.0.1,DB_PORT=33060
```

#### STEP.2 mysql 컨테이너 설정

```
docker run --name mysql-blog-container -e MYSQL_ROOT_PASSWORD=testtesttest -d -p 3307:3306 mysql:8.0.28-oracle
```

#### STEP.3 SQL 적용

```
docker exec -i mysql-blog-container sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < /Users/hhj/Documents/GitHub/.sql/dvt_blog.sql
```