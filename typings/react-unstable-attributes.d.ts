// react-unstable-attributes.d.ts
import "react";
declare module "react" {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    class?: string;
  }
}