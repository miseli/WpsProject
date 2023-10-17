/**
 * 通过隐患排查台账下载"整改附件"对应图片
 * @param  {string} Keywords 隐患内容关键字
 * @param  {Number} id       隐患序号,可以自己编顺序
 * @return {Array}           返回附件所在tr元素
 */
async function searchKeywords(Keywords, id = -1){
    let PrefixInt = (num, length)=>{
        if(num<0)return num
        return ( "0000000000000000" + num ).substr( -length )
    }
    id = PrefixInt(id,4)
    let params = {
        subname: 'view',
        Keywords: Keywords, //'Z-1212C西侧一温压表表面被油污覆盖，无法读取仪表数据'
        '_': new Date().getTime()
    }
    // 搜索隐患
    return $axios.get('/CommonBiz/HIHiddenDanger/List',{'params':params}).then(({data})=>{
        let d = $$(data).find('a:contains("查看")').filter((i,item)=>{
            return item.text=='查看'
        })
        // 获取隐患页
        return $axios.get(d.data('url')).then(({data})=>{
            let content = $$(data).find('div.editor-label:contains("整改附件")').next('.editor-field')
            let url = content.find('.ui-files').data('url')
            ,files = content.find('input').val()
            // 获取附件页
            return $axios.get(url + '&' + $qs.stringify({files})).then(({data})=>{
                // 从附件页面获取附件地址
                let trs = $$(data).find('tr').toArray()
                trs.shift()
                trs = trs.map((item, i)=>{
                    let title = $$(item).find('td:nth-child(2)').text()
                    let url = $$(item).find('a:nth-child(1)').attr('href')
                    if(/前/.test(title)){
                        title = id + '_前_' + title
                    }else if(/后/.test(title)){
                        title = id + '_后_' + title
                    }else{
                        title = id + '_无_' + title
                    }
                    console.log.apply(this, ['http://10.10.15.32' + url, title])
                    $downloadresource.downloadResource.apply(this, ['http://10.10.15.32' + url, title])
                    return(['http://10.10.15.32' + url, title])
                })
                if(trs.length<=0)throw '无图片'
                return trs
            })
        })
    })
}


/**
 * 通过隐患整改台账下载"整改附件"对应图片
 * @param  {string} Keywords 隐患内容关键字
 * @param  {Number} id       隐患序号,可以自己编顺序
 * @return {Array}           返回附件所在tr元素
 */
async function searchKeywords2(Keywords, id = -1){
    let PrefixInt = (num, length)=>{
        if(num<0)return num
        return ( "0000000000000000" + num ).substr( -length )
    }
    id = PrefixInt(id,4)
    let params = {
        subname: 'resview',
        Keywords: Keywords, //'Z-1212C西侧一温压表表面被油污覆盖，无法读取仪表数据'
        '_': new Date().getTime()
    }
    // 搜索隐患
    return $axios.get('/CommonBiz/HIHiddenDanger/List',{'params':params}).then(({data})=>{
        let d = $$(data).find('a:contains("查看")').filter((i,item)=>{
            return item.text=='查看'
        })
        // 获取隐患页
        return $axios.get(d.data('url')).then(({data})=>{
            let content = $$(data).find('div.editor-label:contains("整改附件")').next('.editor-field')
            let url = content.find('.ui-files').data('url')
            ,files = content.find('input').val()
            // 获取附件页
            return $axios.get(url + '&' + $qs.stringify({files})).then(({data})=>{
                // 从附件页面获取附件地址
                let trs = $$(data).find('tr').toArray()
                trs.shift()
                trs = trs.map((item, i)=>{
                    let title = $$(item).find('td:nth-child(2)').text()
                    let url = $$(item).find('a:nth-child(1)').attr('href')
                    if(/前/.test(title)){
                        title = id + '_前_' + title
                    }else if(/后/.test(title)){
                        title = id + '_后_' + title
                    }else{
                        title = id + '_无_' + title
                    }
                    console.log.apply(this, ['http://10.10.15.32' + url, title])
                    $downloadresource.downloadResource.apply(this, ['http://10.10.15.32' + url, title])
                    return(['http://10.10.15.32' + url, title])
                })
                if(trs.length<=0)throw '无图片'
                return trs
            })
        })
    })
}