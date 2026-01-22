# 前提

このアプリではデータの永続化にfirebaseを使用しています。以下の手順に従ってセットアップを行ってください。

# セットアップ

1. Firebaseプロジェクトの作成；Firebase Consoleでプロジェクトを作成します。
1. Firestoreの有効化：「Firestore Database」からデータベースを作成してください。
1. .envファイルの作成：.env.example から.env ファイルを作成してください。
1. .envファイルに必要な情報を記入：.envファイルに作成したデータベースのコレクション名と「apiKey」「authDomain」「projectId」「storageBucket」「messagingSenderId」「appId」の情報を記載してください
1. データの永続化が可能になりました。
