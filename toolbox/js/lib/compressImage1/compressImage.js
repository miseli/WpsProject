        function sanitize_filename(filename, delMap, regx){
            let tmp = replaceFileExtension(filename,'jpg')
            let fileinfo = getFileInfo(tmp)
            tmp = fileinfo.name

            for(let item in delMap){
                if(delMap[item]){
                    tmp = tmp.replace(new RegExp(regx[item], 'g'),'')
                }
            }

            fileinfo.name = tmp

            fileinfo.fullname = `${fileinfo.name}.${fileinfo.ext}`
            return fileinfo
        }

        function removeChineseCharacters(str) {
            // 使用正则表达式替换汉字为空字符串
            // 这里使用 \u4e00-\u9fff 来匹配大部分汉字
            // 注意：这不会匹配所有可能的汉字字符，但会匹配大部分
            return str.replace(/[\u4e00-\u9fff]+/g, '');
        }

        function convertCSV(data_array){
            let exportcsv_content = `字段说明： 1. *号为必填项； 2. 填写数字编码代替属性值； 3. 使用EXCEL编辑导入文件时，请将单元格的格式修改为文本格式，避免数字文本自动转换为科学计数文本；,,,,,,,,,
   请输入1~32个字符；不能包含 ' /   : * ? " < > | 这些特殊字符。, 填写从选择导入的组织名称开始，至目标组织父组织的完整名称路径（例如：选择组织1进行导入，当前这条记录需要导入到组织1下的组织X，那么填写的信息为组织1/组织X）；,  内码为系统内部生成编码indexcode，系统根据内码来判断是新增还是修改，为空为新增，不空为修改；不为空时，非系统生成编码，视为无效数据,  111（身份证）、112（临时居民身份证）、113（户口簿）、114（军官证）、116（暂住证）、123（警官证）、131（工作证）、133（学生证）、335（驾驶证）、337（行驶证）、414（护照）、782（市民卡）、990（其它证件）,   1~20个字符；只允许输入数字和字母, 1~32个字符；只允许输入数字、字母和汉字,  1~20位数字,    人员姓名拼音,,
    *姓名,    *组织路径,  内码, 证件类型,   证件号码,   *工号,    手机号码,   拼音, 生效日期,   失效日期\n`
            exportcsv_content += data_array.join('\n')

            const blob = new Blob([exportcsv_content], { type: 'text/csv;charset=utf-8;' }); // 创建Blob对象
            return blob
            // copytext(exportcsv_content)
        }

         function copytext(t) {
            null == t && console.log("\n  // 用法:\n  // copyToClipboard('Lorem ipsum');\n  // 'Lorem ipsum' copied to clipboard\n    ");
            var e = document.createElement("textarea");
            e.value = t,
            e.setAttribute("readonly", ""),
            e.style.position = "absolute",
            e.style.left = "-9999px",
            document.body.appendChild(e);
            var r = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
            e.select(),
            document.execCommand("copy"),
            document.body.removeChild(e),
            r && (document.getSelection().removeAllRanges(),
            document.getSelection().addRange(r))
        }

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

                    /**********判断图片是否是JPG************/
                    let not_jpg = true
                    // JPG 文件通常以 0xFF, 0xD8 开始
                    if (bytes[0] === 0xFF && bytes[1] === 0xD8) {
                        not_jpg = false;
                    } else {
                        not_jpg = true;
                    }
                    /**********判断图片是否是JPG************/

                    let i = 0;
                    while (i < len) {
                        spark.append(bytes.subarray(i, i + chunkSize)); // Append in chunks of 1MB
                        i += chunkSize;
                    }

                    let md5str = spark.end()
                    file.md5str = md5str
                    file.not_jpg = not_jpg
                    resolve({md5str, not_jpg});
                };

                reader.onerror = (error) => {
                    reject(error);
                };

                reader.readAsArrayBuffer(file);
            });
        };

        /**
         * 获取文件的名称和后缀
         * @param  {String} fileName 包括后缀
         * @return {Object}          返回{name,ext, fullname}
         */
        function getFileInfo(fileName/*包括后缀*/, newExtension/*不包括点*/) {
            const matched = fileName.match(/^(.+)\.([^.]+)$/)
            let ret = {fullname: matched[0], name: matched[1], ext: matched[2]}
            if(newExtension!=undefined){
                ret.ext = newExtension
                ret.fullname = replaceFileExtension(ret.fullname, newExtension)
            }
            return ret
        }

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
                let md5data = await md5_file(file)
                console.log('文件MD5值:', file, md5data.md5str);
                formData.append('file1[]', file);
                formData.append('md5str[]', md5data.md5str);
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

        function dataURL2file(dataUrl, fileName) {
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

        function dataURL2blob(dataURL) {
            let arr = dataURL.split(','), mime = arr[0].match(/:(.*?);/)[1];
            let bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {type:mime});
        }

        function blob2blobURL(blob){
            return URL.createObjectURL(blob);
        }

        function file2blob(file) {
            return new Blob([file], { type: file.type })
        }

        function file2blobURL(file){
            return blob2dataURL(file2blob(file));
        }

        function compressImage(file, quality = 0.94) {
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
                        const newDataURL = canvas.toDataURL('image/jpeg', quality);
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
            URL.revokeObjectURL(dataurl)
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
                    // 先清空列表
                    document.getElementById('ulclass').innerHTML = ''
                    // 逐个添加
                    for(let file of files){
                        await md5_file(file)
                        appendli(file.name, file)
                    }

                    // dropzone['files'] = [...files, ...dropzone['files']?dropzone['files']:[]]
                });

                let imageUploads = document.getElementsByClassName('imageUpload')
                let imageUpload = imageUploads[0]

                // 开方文件拖放区域到全局范围
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
                        await md5_file(file)
                        appendli(file.name, file)
                    }

                    // dropzone['files'] = [...files, ...dropzone['files']?dropzone['files']:[]]
                    // document.getElementById('span_text').innerText = ' ' + dropzone['files'].length + ' 个文件待上传'
                })

                // 为 body 添加 paste 事件监听器
                document.body.addEventListener('paste', async function(event) {
                    // 获取剪贴板数据
                    var clipboardData = event.clipboardData || window.clipboardData;

                    if(!clipboardData.types.includes("text/plain")){
                        // 阻止默认粘贴行为，这样我们可以自定义处理
                        event.preventDefault();
                    }else{
                        console.log(event.target)
                        // debugger
                    }

                    // 检查是否有文件被粘贴
                    if (clipboardData && clipboardData.items) {
                        for(let item of clipboardData.items){
                            if (item.kind === 'file') {
                                // 处理粘贴的文件
                                var file = item.getAsFile();
                                // console.log(file)
                                // blob 是粘贴的文件，你可以在这里进行进一步的处理，比如读取文件内容或上传文件
                                // console.log(item,'粘贴了文件:', file);
                                md5_file(file)
                                console.log(file)
                                appendli(file.name, file)
                            }
                        }
                    }
                });
            }
        }

        const btnClickEvent1 = async function (e){
            let zip = new JSZip()

            let ts = parseInt(new Date().getTime()/1000),
            successfolder = zip.folder('成功' + ts)
            failedfolder = zip.folder('失败' + ts)

            let errlog = []
            let successlog = []
            let csv_data_arr = []

            let custom = document.getElementById('yanzheng').value.trim()
            let regx = {
                hanzi:'[\\u4e00-\\u9fff]+',
                shuzi:'\\d',
                fuhao:'[~!@#$%^&*()_\\+-=`]',
                zimu:'[a-zA-Z]',
                whitespace:'\\s',
                custom
            }

            // document.querySelectorAll('.options input')
            let delMap = {custom: true}

            Array.from(document.querySelectorAll('.options input')).map((item,id)=>{
                delMap = {[item.getAttribute('id')]: item.checked, ...delMap}
                // return item.checked?1:0
            })

            debugger

            let prefix_word = document.getElementById('prefix_word').value,
                suffix_word = document.getElementById('suffix_word').value,
                orgname = document.getElementById('orgname').value
            prefix_word = `${prefix_word.trim()}`
            suffix_word = `${suffix_word.trim()}`
            orgname = `${orgname.trim()}`

            // 获取所有的<li>元素
            var listItems = document.querySelectorAll('ul#ulclass li');
            // 使用for...of循环遍历<li>元素
            for (const listItem of listItems) {
                console.log(listItem);
                let {file, blob} = listItem
                let originalname = file.name
                let fileinfo = getFileInfo(replaceFileExtension(file.name,'jpg'))

                // 文件名可能被处理成空,谨慎使用
                fileinfo = sanitize_filename(file.name, delMap, regx)

                let newName = `${prefix_word}${fileinfo.name}${suffix_word}YX${ts}`
                newName = `${newName}${SparkMD5.hash(newName)}`.slice(0,32)
                let userName = `${fileinfo.name}YX${ts}`

                /* 成功则加入成功文件夹 */
                if(blob.size < 200*1024 && blob.size >10*1024 && fileinfo.name != ''){
                    successfolder.file(`${newName}.${fileinfo.ext}`, blob, {binaray: true})
                    csv_data_arr.push(`${userName},${orgname},,,, ${newName},,,,`)

                    successlog.push(`${originalname}\t\t成功\t\t${newName}.${fileinfo.ext}`)
                }
                else /* 失败则加入文件夹 */
                {
                    failedfolder.file(`${newName}.${fileinfo.ext}`, blob, {binaray: true})

                    errlog.push(`${originalname}\t\t失败\t\t处理后仍<10k或>200K,或文件名不规范`)
                }
            }

            if(listItems.length<=0){
            // if(!(successlog.length>0 && errlog.length>0)){
                let imageUploads = document.getElementsByClassName('imageUpload')
                let imageUpload = imageUploads[0]
                document.getElementById('myForm').reset()
                imageUpload.click();
                return;
            }
            if(csv_data_arr.length>0){
                zip.file(`${orgname}照片清单${ts}.csv`, convertCSV(csv_data_arr, ts))
            }

            zip.file(`${listItems.length}-S${listItems.length-errlog.length}-F${errlog.length}-log.txt`,
                `文件名解读: "第一个数字"表示共处理的多少个文件,"S数字"表示成功处理了多少个文件,"F数字"表示失败了多少个文件\n` +
                `成功 ${listItems.length-errlog.length} 个,失败 ${errlog.length} 个,共计 ${listItems.length} 个\n\n${successlog.join('\n')}\n${errlog.join('\n')}`)
            // 生成压缩文件
            zip.generateAsync({ type: 'blob' }).then(content=>{
                // 这里的content是一个Blob对象，表示压缩后的文件
                // 你可以使用URL.createObjectURL(content)来获取文件的临时URL
                // 或者使用saveAs(content)来下载这个文件
                saveAs(content, `${ts}-${orgname}-${listItems.length}-S${listItems.length-errlog.length}-F${errlog.length}.zip`) // 使用file-saver库来保存文件
            })

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
                const blob = dataURL2Blob(newDataURL);
                console.log(file, blob, newDataURL)
                downloadfile(blob, file.name)
            }
*/
            // 上传文件
            // uploadFile(files);
        }

        const btnClickEvent2 = async function (e){

            // return
            let zip = new JSZip()
            let t = new Date().getTime(),
            ts = parseInt(t/1000),
            log = [],
            listItems = document.querySelectorAll('ul#ulclass li');

            // 使用for...of循环遍历<li>元素
            for (const listItem of listItems) {
                console.log(listItem);
                let {file, blob} = listItem

                let fileinfo = getFileInfo(file.name)
                if(blob.size>=200*1024){
                    log.push(file.name + '\t处理后仍大于200K')
                    zip.file(`${fileinfo.name}处理后仍大于200K.${fileinfo.ext}`, blob, {binaray: true})
                }else{
                    zip.file(file.name, blob, {binaray: true})
                }
            }

            if(listItems.length<=0){
                let imageUploads = document.getElementsByClassName('imageUpload')
                let imageUpload = imageUploads[0]
                document.getElementById('myForm').reset()
                imageUpload.click();
                return;
            }

            zip.file('说明.txt', log.join('\n'))
            zip.generateAsync({ type: 'blob' }).then(content=>{
                saveAs(content, `${new Date(t).format('hhmmss')}.zip`)
            })
        }

        function removeEle(e) {
            e.stopPropagation();

            let el = e.target
            if(el.tagName.toLowerCase() !== 'li'){
                el = el.parentNode.parentNode.parentNode
            }
            el.remove()
        }

        async function appendli(text, data){
            let uls = document.getElementsByClassName('ulclass')
            let file = data

            for(let ul of uls){
                let blob = file2blob(file)
                if(file.not_jpg || file.size<=10*1024 || file.size>=200*1024 || !/\.jpg$/.test(file.name)){
                    let newDataURL = await compressImage(file)
                    // 创建一个 Blob 对象
                    blob = dataURL2blob(newDataURL);
                }

                let li = document.createElement('li')
                let span1 = document.createElement('span')
                let span2 = document.createElement('span')

                let cancelBtn = document.createElement('div')
                let inputDiv = document.createElement('div')
                let outputDiv = document.createElement('div')
                let middleDiv = document.createElement('div')
                inputDiv.className = 'input'
                outputDiv.className = 'outputDiv'
                middleDiv.className = 'middleDiv'

                middleDiv.innerText = '=>'
                inputDiv.append(span1)
                outputDiv.append(span2)

                let oldsize = parseInt(file.size/1024)
                let newsize = parseInt(blob.size/1024)

                if(blob.size>=200*1024){
                    li.classList.add('warning')
                }

                li.title = '双击下载'
                cancelBtn.className = 'fdecs'
                cancelBtn.addEventListener('click', removeEle)

                span1.innerText = `${text}` + `(${oldsize>=1024?parseInt(oldsize/1024):oldsize}${oldsize>=1024?'Mb':'Kb'})`
                span2.innerText = `${text}` + `(${parseInt(blob.size/1024)}Kb)`

                // li.innerText = `${text}  ${oldsize>=1024?parseInt(oldsize/1024):oldsize}${oldsize>=1024?'Mb':'Kb'} => ${parseInt(blob.size/1024)}Kb`

                li['file'] = file
                li['blob'] = blob
                li['not_jpg'] = file.not_jpg

                file['target'] = li
                li.append(inputDiv)
                li.append(middleDiv)
                li.append(outputDiv)
                span2.append(cancelBtn)
                ul.append(li)
                // <li><span>retouch_2024040514530511.png</span><span> 5Mb => 61kb</span></li>
            }
        }













































// function checkIfJPG(file) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();

//         reader.onload = function(e) {
//             const buffer = new Uint8Array(e.target.result);

//             // JPG 文件通常以 0xFF, 0xD8 开始
//             if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
//                 resolve(true);
//             } else {
//                 resolve(false);
//             }
//         };

//         reader.onerror = function(e) {
//             reject(e.error);
//         };

//         // 读取文件的前 2 字节（足以判断是否是 JPG）
//         const blobSlice = file.slice(0, 2);
//         reader.readAsArrayBuffer(blobSlice);
//     });
// }

// // 使用示例
// document.querySelector('input[type="file"]').addEventListener('change', async (e) => {
//     const file = e.target.files[0];
//     const isJPG = await checkIfJPG(file);
//     console.log(isJPG ? '是 JPG 文件' : '不是 JPG 文件');
// });


