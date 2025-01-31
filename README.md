# spocon

## 起動準備

### dockerコンテナをビルド
```
$ docker-compose build
```

### フロントエンドで利用するライブラリのインストール
```
$ npm --prefix ui ci
```

## 起動

### mysqlコンテナを立ち上げる
```
$ docker-compose up mysql
```
#### ローカルからmysqlへ接続するときのコマンド
```
mysql -p --host=127.0.0.1
```

### dockerでrails起動
起動後､`http://127.0.0.1:3000/`で動作する
```
$ docker-compose up rails
```

### dockerでフロントエンド起動
```
$ docker-compose up react
```

## テスト

### テスト用のMySQLコンテナを起動
```
$ docker-compose up test-mysql
```

### railsのテスト実行
```
$ docker-compose run --rm rails-test rspec spec/requests
```

## コード整形

### フロントエンド
```
$ npm --prefix ui run fmt
```
