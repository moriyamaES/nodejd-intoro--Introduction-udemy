# nodejs-intoro-Introduction-udemy
Node.js 入門 ー演習しながら学ぶ基本クラスの使い方ー

## node.jsのインストール

- 以下のコマンドを実行

    ```sh
    uname -a
    Linux localhost.localdomain 4.18.0-513.el8.x86_64 #1 SMP Fri Aug 25 14:33:28 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux
    ```

    ```sh
    dnf module list nodejs
    メタデータの期限切れの最終確認: 0:14:30 前の 2023年10月04日 22時01分31秒 に実施しました。
    CentOS Stream 8 - AppStream
    Name      Stream    Profiles                                Summary             
    nodejs    10 [d]    common [d], development, minimal, s2i   Javascript runtime  
    nodejs    12        common [d], development, minimal, s2i   Javascript runtime  
    nodejs    14        common [d], development, minimal, s2i   Javascript runtime  
    nodejs    16        common [d], development, minimal, s2i   Javascript runtime  
    nodejs    18        common, development, minimal, s2i       Javascript runtime  
    nodejs    20        common [d], development, minimal, s2i   Javascript runtime
    ```

    ```sh
    sudo dnf module install nodejs:20
    メタデータの期限切れの最終確認: 15:12:53 前の 2023年10月04日 07時10分28秒 に実施しました。
    依存関係が解決しました。
    ================================================================================
    パッケージ   Arch   バージョン                                 Repo      サイズ
    ================================================================================
    group/moduleパッケージをインストール:
    nodejs       x86_64 1:20.5.1-1.module_el8+641+80a1645e         appstream  14 M
    npm          x86_64 1:9.8.0-1.20.5.1.1.module_el8+641+80a1645e appstream 2.8 M
    弱い依存関係のインストール:
    nodejs-docs  noarch 1:20.5.1-1.module_el8+641+80a1645e         appstream  10 M
    nodejs-full-i18n
                x86_64 1:20.5.1-1.module_el8+641+80a1645e         appstream 8.2 M
    モジュールプロファイルのインストール中:
    nodejs/common
                                                                                
    モジュールストリームの有効化中:
    nodejs              20                                                        

    トランザクションの概要
    ================================================================================
    インストール  4 パッケージ

    ダウンロードサイズの合計: 35 M
    インストール後のサイズ: 174 M
    これでよろしいですか? [y/N]: y
    パッケージのダウンロード:
    (1/4): nodejs-full-i18n-20.5.1-1.module_el8+641 9.1 MB/s | 8.2 MB     00:00    
    (2/4): nodejs-docs-20.5.1-1.module_el8+641+80a1 9.4 MB/s |  10 MB     00:01    
    (3/4): npm-9.8.0-1.20.5.1.1.module_el8+641+80a1 9.6 MB/s | 2.8 MB     00:00    
    (4/4): nodejs-20.5.1-1.module_el8+641+80a1645e. 8.6 MB/s |  14 MB     00:01    
    --------------------------------------------------------------------------------
    合計                                             18 MB/s |  35 MB     00:01     
    トランザクションの確認を実行中
    トランザクションの確認に成功しました。
    トランザクションのテストを実行中
    トランザクションのテストに成功しました。
    トランザクションを実行中
    scriptletの実行中: npm-1:9.8.0-1.20.5.1.1.module_el8+641+80a1645e.x86_6   1/1 
    準備             :                                                        1/1 
    インストール中   : nodejs-docs-1:20.5.1-1.module_el8+641+80a1645e.noarc   1/4 
    インストール中   : nodejs-full-i18n-1:20.5.1-1.module_el8+641+80a1645e.   2/4 
    インストール中   : npm-1:9.8.0-1.20.5.1.1.module_el8+641+80a1645e.x86_6   3/4 
    インストール中   : nodejs-1:20.5.1-1.module_el8+641+80a1645e.x86_64       4/4 
    scriptletの実行中: nodejs-1:20.5.1-1.module_el8+641+80a1645e.x86_64       4/4 
    検証             : nodejs-1:20.5.1-1.module_el8+641+80a1645e.x86_64       1/4 
    検証             : nodejs-docs-1:20.5.1-1.module_el8+641+80a1645e.noarc   2/4 
    検証             : nodejs-full-i18n-1:20.5.1-1.module_el8+641+80a1645e.   3/4 
    検証             : npm-1:9.8.0-1.20.5.1.1.module_el8+641+80a1645e.x86_6   4/4 

    インストール済み:
    nodejs-1:20.5.1-1.module_el8+641+80a1645e.x86_64                              
    nodejs-docs-1:20.5.1-1.module_el8+641+80a1645e.noarch                         
    nodejs-full-i18n-1:20.5.1-1.module_el8+641+80a1645e.x86_64                    
    npm-1:9.8.0-1.20.5.1.1.module_el8+641+80a1645e.x86_64                         

    完了しました!
    ```

    ```sh
    node -v
    v20.5.1
    ```

    ```sh
    npm -v
    9.8.0
    ```