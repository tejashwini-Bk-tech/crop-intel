import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Leaf, 
  Camera, 
  BookOpen, 
  History, 
  Lightbulb,
  BarChart3,
  Menu,
  X 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: BarChart3,
  },
  {
    title: "Disease Detector",
    url: createPageUrl("Detector"),
    icon: Camera,
  },
  {
    title: "Plant Library",
    url: createPageUrl("Library"),
    icon: BookOpen,
  },
  {
    title: "My Diagnoses",
    url: createPageUrl("History"),
    icon: History,
  },
  {
    title: "Expert Tips",
    url: createPageUrl("Tips"),
    icon: Lightbulb,
  }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <style>{`
        :root {
          --primary-forest: #2D5A3D;
          --primary-leaf: #4CAF50;
          --secondary-lime: #8BC34A;
          --accent-warm: #FFF8E1;
          --text-primary: #1B2E1B;
          --text-secondary: #4A6B4A;
        }
      `}</style>
      
      <SidebarProvider>
        <div className="flex w-full">
          <Sidebar className="border-r border-green-100 bg-white/80 backdrop-blur-sm">
            <SidebarHeader className="border-b border-green-100 p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-xl text-green-900">PlantDoc</h2>
                  <p className="text-xs text-green-600 font-medium">AI Plant Health Specialist</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent className="p-3">
              <SidebarGroup>
                <SidebarGroupLabel className="text-xs font-semibold text-green-700 uppercase tracking-wider px-3 py-3">
                  Navigation
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-1">
                    {navigationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          className={`group relative hover:bg-green-50 hover:text-green-800 transition-all duration-200 rounded-xl ${
                            location.pathname === item.url 
                              ? 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 font-semibold shadow-sm' 
                              : 'text-green-700'
                          }`}
                        >
                          <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                            {location.pathname === item.url && (
                              <div className="absolute right-2 w-1.5 h-6 bg-green-500 rounded-full" />
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup className="mt-6">
                <SidebarGroupLabel className="text-xs font-semibold text-green-700 uppercase tracking-wider px-3 py-3">
                  Quick Stats
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="px-4 py-3 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600">Plants Monitored</span>
                      <span className="font-bold text-green-800">0</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600">Health Score</span>
                      <span className="font-bold text-green-500">100%</span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-green-100 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center">
                  <span className="text-green-800 font-bold text-sm">U</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-green-900 text-sm truncate">Plant Expert</p>
                  <p className="text-xs text-green-600 truncate">Keep your plants healthy</p>
                </div>
              </div>
            </SidebarFooter>
          </Sidebar>

          <main className="flex-1 flex flex-col min-h-screen">
            {/* Mobile header */}
            <header className="bg-white/90 backdrop-blur-sm border-b border-green-100 px-6 py-4 md:hidden sticky top-0 z-50">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-green-50 p-2 rounded-lg transition-colors duration-200" />
                <div className="flex items-center gap-2">
                  <Leaf className="w-6 h-6 text-green-600" />
                  <h1 className="text-xl font-bold text-green-900">PlantDoc</h1>
                </div>
              </div>
            </header>

            <div className="flex-1">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}