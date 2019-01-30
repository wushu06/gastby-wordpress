import React from 'react';
import {Divider, List, ListItem, ListItemText} from '@material-ui/core'
import Link from 'gatsby-link'


class Menu extends React.Component {
    render() {
        const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items

        return (
            <div>              
                    {data.map((item) =>
                        <List key={item.object_slug}>
                            <Link to={item.url}>
                            <ListItem button >
                                <ListItemText primary= {item.title} />
                            </ListItem>
                        </Link>
                        </List>
                       
                        
                    )}
                   

                <Divider />
            </div>
        )
    }
}

export default Menu;