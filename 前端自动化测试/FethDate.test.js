import {fethdate} from "./FethDate.js"

test('异步代码测试',(done)=>{
    fethdate((data)=>{
        expect(data).toEqual({
            success:true
        })
        done();
    })
})