import styled from "@emotion/styled"

const HeaderContainer = styled.header`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 16px;
    height: 48px;
`
const Logo = styled.div`
    color:#222;
    font-size: 24px;
`
const Menu = styled.div`
    display:flex;
    flex-direction: column;
    gap: 5px;    
`
const MenuBar = styled.div`
    width: 20px;
    height: 2px;
    background-color:#222;
    border-radius: 20px;
`
const Header = () => {
    return (
        <HeaderContainer>
            <Logo>hong</Logo>
            <Menu>
                <MenuBar />
                <MenuBar />
                <MenuBar />
            </Menu>
        </HeaderContainer>
    )
}
export default Header