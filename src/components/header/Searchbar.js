import React from 'react'
import {InputBase, makeStyles, fade} from '@material-ui/core'
import {Search} from '@material-ui/icons';
const useStyle = makeStyles((theme)=>({
    search: {
        // borderRadius: theme.shape.borderRadius,
        background:'#fff',
        marginLeft: 10,
        width: '40vw',
        color:'black',
        display:'flex' ,
      },
      searchIcon: {
        padding:5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        width:"10%",
        color:'blue'

      },
      inputRoot: {
        color: 'inherit',
        width:'100%'
      },
      inputInput: {
        paddingLeft:20
      }
}))


export default function Searchbar() {
    const classes = useStyle()
    return (
        <div>
            <div className={classes.search}>
                
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div className={classes.searchIcon}>
                    <Search />
                </div>
            </div>
        </div>
    )
}
