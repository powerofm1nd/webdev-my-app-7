import { Switch } from 'antd';


function SwitchTheme({onChangeTheme})
{
    function handleChange(checked)
    {
        if (checked)
        {
            onChangeTheme('dark')
        }
        else
        {
            onChangeTheme('light')
        }
    }


    return (<Switch onChange={(checked) => {handleChange(checked)}} defaultChecked size="large" style={{marginTop:"10px", marginRight:"30px", scale:"1.9"}}/>)
}

export default SwitchTheme;