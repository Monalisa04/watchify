import React from "react";
import Sidebar from "react-sidebar";
import FA from "react-fontawesome";

interface SideNavState {
  sidebarDocked: boolean;
  sidebarOpen: boolean;
}

const mediaQueryList = window.matchMedia(`(min-width: 768px)`);

class SideNav extends React.Component<{}, SideNavState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidebarDocked: mediaQueryList.matches,
      sidebarOpen: mediaQueryList.matches
    };
  }

  componentWillMount() {
    mediaQueryList.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mediaQueryList.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen = (open: boolean) => {
    this.setState({ sidebarOpen: open });
  };

  mediaQueryChanged = () => {
    this.setState({
      sidebarDocked: mediaQueryList.matches,
      sidebarOpen: mediaQueryList.matches
    });
  };

  render() {
    return (
      <Sidebar
        sidebar=""
        docked={this.state.sidebarDocked}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        rootClassName="sidenav-container"
        sidebarClassName="sidenav"
        contentClassName="sidenav-content"
        overlayClassName="sidenav-overlay"
        styles={{ sidebar: { background: "#4c5678", width: "200px" } }}
      >
        <FA
          name="bars"
          size="2x"
          style={{ color: "#FFF" }}
          onClick={() => this.onSetSidebarOpen(true)}
        />
      </Sidebar>
    );
  }
}
export default SideNav;
