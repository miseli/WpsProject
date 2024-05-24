        // 计算文件md5值
        const md5_file = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                const spark = new SparkMD5.ArrayBuffer();

                reader.onload = (event) => {
                    const chunkSize = 1024*1024; //好像也可以是2048
                    const arrayBuffer = event.target.result;
                    const bytes = new Uint8Array(arrayBuffer);
                    const len = bytes.byteLength;

                    let i = 0;
                    while (i < len) {
                        spark.append(bytes.subarray(i, i + chunkSize)); // Append in chunks of 1MB
                        i += chunkSize;
                    }

                    let md5str = spark.end()
                    file.md5str = md5str
                    resolve(spark.end());
                };

                reader.onerror = (error) => {
                    reject(error);
                };

                reader.readAsArrayBuffer(file);
            });
        };

        function replaceFileExtension(fileName, newExtension) {
            // 使用正则表达式匹配文件名中的后缀
            // 这个正则表达式假设文件名中只有一个点号作为后缀的分隔符
            const regex = /\.([^.]+)$/;
            const result = fileName.replace(regex, `.${newExtension}`);
            return result;
        }

        // 文件上传函数
        async function uploadFile(files) {
            const formData = new FormData();
            formData.append('fieldname', 'file1');

            for(let file of files){
                let md5 = await md5_file(file)
                console.log('文件MD5值:', file, md5);
                formData.append('file1[]', file);
                formData.append('md5str[]', md5);
            }

            // http://127.0.0.1:8010/tp6/public/personcontroller/upload
            // 200k.php
            axios.post('http://127.0.0.1:8010/tp6/public/personcontroller/upload', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log('图片上传成功:', response);
            })
            .catch(error => {
                console.error('图片上传失败:', error);
            });
        }


        // 将 dataURL 转换为 Blob 对象
        function dataURLToBlob(dataURL) {
            let arr = dataURL.split(','), mime = arr[0].match(/:(.*?);/)[1];
            let bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {type:mime});
        }

        function dataURLToFile(dataUrl, fileName) {
            // 分割DataURL以获取MIME类型和base64数据
            let parts = dataUrl.split(';base64,');
            let contentType = parts[0].split(':')[1];
            let raw = window.atob(parts[1]);

            // 将base64解码后的字符串转换为Uint8Array
            let rawLength = raw.length;
            let uInt8Array = new Uint8Array(rawLength);
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }

            // 创建Blob对象
            let blob = new Blob([uInt8Array], { type: contentType });

            // 使用Blob对象创建File对象
            return new File([blob], fileName, { type: contentType });
        }

        function blobTodataURL(blob){
            return URL.createObjectURL(blob);
        }

        function fileTodataURL(file){
            return URL.createObjectURL(new Blob([file], { type: file.type }));
        }

        function compressImage(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target.result;
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        window['_cube'] = canvas
                        const ctx = canvas.getContext('2d');

                        // 设置新的图片尺寸
                        let newWidth = 600; // 新的宽度
                        let newHeight = 800; // 新的高度

                        // 根据原始图片的宽高比来计算新的高度
                        let ratio = Math.min(newWidth / img.width, newHeight / img.height)
                        newWidth = img.width * ratio
                        newHeight = img.height * ratio
                        // if (img.width > img.height) {
                        //   newHeight = img.height * (newWidth / img.width);
                        // } else {
                        //   newWidth = img.width * (newHeight / img.height);
                        // }

                        canvas.width = newWidth;
                        canvas.height = newHeight;
                        // 在canvas上绘制新的图片
                        ctx.drawImage(img, 0, 0, newWidth, newHeight);

                        // 将canvas转换为新的图片数据
                        const newDataURL = canvas.toDataURL('image/jpeg', 0.9);
                        resolve(newDataURL)
                    };
                };
                reader.onerror = (error) => {
                    reject(error);
                };
                reader.readAsDataURL(file);
            });
        }

        /**
         * 前端下载文件函数,支持file,blob,base64str
         * @param  {[type]} obj [description]
         * @return {[type]}     [description]
         */
        function downloadfile(obj, name){
            let dataurl = ''
            if('string'==typeof obj){
                dataurl = obj
            }else if('object'==typeof obj){
                if(obj instanceof File){
                    dataurl = URL.createObjectURL(new Blob([obj], { type: obj.type }));
                }else if(obj instanceof Blob){
                    // 为Blob创建一个URL对象
                    dataurl = URL.createObjectURL(obj);
                }
            }

            if(dataurl==''){
                alert('下载失败')
                return 1;
            }

            let a = document.createElement('a')
            a.download = name
            a.href = dataurl
            a.target = "_blank"
            a.click()
            a.remove()
            a = null
        }

        // 初始化拖拽函数
        function dropstart(){
            // 获取dropzone元素
            // let dropzone = document.getElementById('dropzone');
            let dropzones = document.getElementsByClassName('dropzone')

            for(let dropzone of dropzones){
                // 当文件被拖拽到目标区域时
                dropzone.addEventListener('dragover', function(e) {
                    e.stopPropagation();
                    e.preventDefault(); // 阻止默认行为，允许放置
                    dropzone.classList.add('dragover'); // 添加样式以显示拖放效果
                });

                // 当文件离开目标区域时
                dropzone.addEventListener('dragleave', (e) => {
                    e.preventDefault();
                    dropzone.classList.remove('dragover');
                });

                // 当文件被放置到目标区域时
                dropzone.addEventListener('drop', async function(e) {
                    e.stopPropagation();
                    e.preventDefault(); // 阻止表单默认提交行为
                    console.log(e.target)
                    dropzone.classList.remove('dragover');

                    // 获取拖拽的文件
                    let files = e.dataTransfer.files;
                    if(files.length==0){
                        alert('无文件')
                        return;
                    }

                    for(let file of files){
                        let md5str = await md5_file(file)
                        file.md5 = md5str
                        appendli(file.name, file)
                    }

                    // dropzone['files'] = [...files, ...dropzone['files']?dropzone['files']:[]]
                });

                let imageUploads = document.getElementsByClassName('imageUpload')
                let imageUpload = imageUploads[0]

                window['dropzone'] = dropzone
                // 双击打开选择文件对话框
                dropzone.addEventListener('dblclick', function(e){
                    document.getElementById('myForm').reset()
                    imageUpload.click();
                })

                // 选择文件对话框选择文件
                imageUpload.addEventListener('change', async function(e){
                    let files = e.target.files;
                    if(files.length==0){
                        alert('无文件')
                        return;
                    }

                    for(let file of files){
                        let md5str = await md5_file(file)
                        file.md5 = md5str
                        appendli(file.name, file)
                    }

                    // dropzone['files'] = [...files, ...dropzone['files']?dropzone['files']:[]]
                    // document.getElementById('span_text').innerText = ' ' + dropzone['files'].length + ' 个文件待上传'
                })

                // 为 body 添加 paste 事件监听器
                document.body.addEventListener('paste', async function(event) {
                    // 阻止默认粘贴行为，这样我们可以自定义处理
                    event.preventDefault();

                    // 获取剪贴板数据
                    var clipboardData = event.clipboardData || window.clipboardData;

                    // 检查是否有文件被粘贴
                    if (clipboardData && clipboardData.items) {
                        for(let item of clipboardData.items){
                            if (item.kind === 'file') {
                                // 处理粘贴的文件
                                var file = item.getAsFile();
                                console.log(file)
                                // blob 是粘贴的文件，你可以在这里进行进一步的处理，比如读取文件内容或上传文件
                                // console.log(item,'粘贴了文件:', file);
                                md5_file(file)
                                // file.md5 = md5str
                                // console.log(file)
                                appendli(file.name, file)
                            }
                        }
                    }
                });
            }
        }

        const btnClickEvent = async function (e){
            // 获取所有的<li>元素
            var listItems = document.querySelectorAll('ul#ulclass li');

            // 使用for...of循环遍历<li>元素
            for (const listItem of listItems) {
              console.log(listItem);
              downloadfile(listItem.blob, replaceFileExtension(listItem.file.name,'jpg'))
              // console.log(listItem.textContent);
            }
/*
            let files = document.getElementById('imageUpload').files
            if(files.length==0){
                let dropzone = document.getElementById('dropzone');
                if(dropzone['files'])
                    files = dropzone['files']
            }

            if(files.length==0){
                alert('请先拖拽文件或双击选择文件,再提交');
                return;
            }

            for(let file of files){
                let newDataURL = await compressImage(file)
                // 创建一个 Blob 对象
                const blob = dataURLToBlob(newDataURL);
                console.log(file, blob, newDataURL)
                downloadfile(blob, file.name)
            }
*/
            // 上传文件
            // uploadFile(files);
        }

        function removeEle(e) {
            e.stopPropagation();

            let el = e.target
            if(el.tagName.toLowerCase() !== 'li'){
                el = el.parentNode.parentNode
            }
            el.remove()
        }

        async function appendli(text, data){
            let uls = document.getElementsByClassName('ulclass')
            let file = data

            for(let ul of uls){
                let newDataURL = await compressImage(file)
                // 创建一个 Blob 对象
                const blob = dataURLToBlob(newDataURL);

                let li = document.createElement('li')
                let span1 = document.createElement('span')
                let span2 = document.createElement('span')
                let cancelBtn = document.createElement('div')

                let oldsize = parseInt(file.size/1024)
                let newsize = parseInt(blob.size/1024)

                li.title = '双击下载'
                cancelBtn.className = 'fdecs'
                cancelBtn.addEventListener('click', removeEle)

                span1.innerText = text
                span2.innerText = `${oldsize>=1024?parseInt(oldsize/1024):oldsize}${oldsize>=1024?'Mb':'Kb'} => ${parseInt(blob.size/1024)}Kb`


                // li.innerText = `${text}  ${oldsize>=1024?parseInt(oldsize/1024):oldsize}${oldsize>=1024?'Mb':'Kb'} => ${parseInt(blob.size/1024)}Kb`

                li['file'] = file
                li['blob'] = blob
                file['target'] = li
                li.append(span1)
                li.append(span2)
                span2.append(cancelBtn)
                ul.append(li)
                // <li><span>retouch_2024040514530511.png</span><span> 5Mb => 61kb</span></li>
            }
        }