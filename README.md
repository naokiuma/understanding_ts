プロジェクトを起動

```
yarn start
```

typescrript の実行

```
tsc src/対象ファイル
```

tsc の変更を監視

```
tsc src/対象ファイル　-w
```

全体の監視
まずルートフォルダで tsc --init し、tsconfig.json が作られるので、
ts に、「これは全て同じプロジェクトだ」と伝えることができる。
以降は、

```
tsc
```

だけでできる。
