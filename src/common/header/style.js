import styled from 'styled-components';

export const Headerbox=styled.div`
    position:fixed;
    top:0;
    z-index:2;
    height:56px;
    width:100%;
    background:white;
    box-shadow:0px 0px 8px #333333;
    line-height:56px;
    text-align:center;
    &.HeaderSearch{
        width:100px;
        height:30px;
        margin:13px;
    }
    .Avatar{
        .AvatarImg{
            position:relative;
        }
    }
    .carsy{
        cursor:pointer
    }
    
   
    
`
export const HeaderItem = styled.div`
    
`
export const AvatarDemo=styled.div`
    position:absolute;
    left:55%;
    top:20px;
    background:white;
    box-shadow:0px 0px 8px #333333;
    border-radius:8px;
    line-height:30px;
    transition: all .3s ease;
    transform: scale(0);
    transform-origin: top left;
    .AvatarDemoItem{
        position:relative;
        padding:10px 15px;
        font-size:12px;
        div{
            border-bottom:1px solid #f0f0f0;
            cursor:pointer;
        }
        .caretIcon{
            position:absolute;
            left:-7px;
            color:white;
        }
    }
`